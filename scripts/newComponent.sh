#!/bin/sh

# 输入组件名
read -p "输入新建的组件名 (格式 CamelCase): " NAME

# CamelCase 转 camel-case
LNAME="$(echo ${NAME:0:1} | tr "[A-Z]" "[a-z]")$(echo ${NAME:1} | perl -pe 's/([A-Z])/-\L$1/g')"

# 判断该组件是否已经存在
if [ -e "src/components/${NAME}" ]
then
  echo "\n"
  echo -n "[Error]: 该组件已存在.\n"
else
  read -p "输入组件描述: " DESCRIPTION
  read -p "输入组件类型 (可选值: Base, Data in, Data out): " TYPE

  if [ $TYPE != "Base" -a $TYPE != "Data in" -a $TYPE != "Base out" ]; then echo "[Error]: 不合法的组件类型.\n" & exit; fi

  # 创建文档 md
  echo "---
sidebarDepth: 2
Props:
Slots:
Events:
---

# ${NAME}
> ${DESCRIPTION}

## API
<api />

## 示例
" > docs/components/$NAME.md

  # 创建组件目录
  cd src/components
  mkdir $NAME
  cd -

  # 创建 componets/NAME/NAME.ts.vue 文件
  echo "<template>
  <div :class=\"classes\">
  </div>
</template>

<script lang=\"ts\">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Hi${NAME} extends Vue {
  get classes () {
    return [
      'hiui-${LNAME}',
    ]
  }
}
</script>

<style lang=\"stylus\">
.hiui-${LNAME} {
}
</style>

" > src/components/$NAME/$NAME.vue

  # 创建 componets/NAME/index.ts 文件
  echo "import ${NAME} from './${NAME}'

${NAME}.install = Vue => {
  Vue.component(${NAME}.name, ${NAME})
}

export default ${NAME}

" > src/components/$NAME/index.ts

  # 添加导入
  IMPORT="import ${NAME} from '.\/${NAME}'"

  sed -e "/\/\/ Shell: New Component import/i\\
$IMPORT\\
" src/components/index.ts > script_tmp
  mv script_tmp src/components/index.ts

# 添加导出
  EXPORT="${NAME},"

  sed -e "/\/\/ Shell: New Component export/i\\
\ \ $IMPORT\\
" src/components/index.ts > script_tmp
  mv script_tmp src/components/index.ts

  # 添加到 .vuepress/config.js 中
  SRC="\'\/components\/${NAME}\',"

  sed -e "/\/\/ Shell: New $TYPE Component/i\\
\ \ \ \ \ \ \ \ \ \ $SRC\\
" docs/.vuepress/config.js > script_tmp
  mv script_tmp docs/.vuepress/config.js

  # 创建 demo 文件夹
  cd docs/demos
  mkdir $NAME
  cd -

fi