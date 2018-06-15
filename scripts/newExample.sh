#!/bin/sh

# 输入需要添加示例的组件
read -p "输入需要添加示例的组件名 (格式 CamelCase): " NAME

# CamelCase 转 camel-case
LNAME="$(echo ${NAME:0:1} | tr "[A-Z]" "[a-z]")$(echo ${NAME:1} | perl -pe 's/([A-Z])/-\L$1/g')"

# 判断该组件不存在
if [ ! -e "src/components/${NAME}" ]
then
  echo "\n"
  echo -n "[Error]: 找不到该组件.\n"
else
  read -p "输入示例英文名称（CamelCase）: " ENAME
  read -p "输入示例中文名称: " ECNNAME
  read -p "输入示例描述: " EDESCRIPTION

  # CamelCase 转 camel-case
  ELNAME="$(echo ${ENAME:0:1} | tr "[A-Z]" "[a-z]")$(echo ${ENAME:1} | perl -pe 's/([A-Z])/-\L$1/g')"

  # 创建 demos/NAME/ELNAME.vue 文件
  echo "<template>
  <example>
    <hi-${LNAME}></hi-${LNAME}>
  </example>
</template>

<script lang=\"ts\">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ${NAME}${ENAME} extends Vue {
}
</script>

<style lang=\"stylus\">
</style>

" > docs/demos/$NAME/$ELNAME.vue

  # 创建 demos/NAME/ELNAME.md 文件
  echo "---
navbar: false
layout: 'phone'
---

<${LNAME}-${ELNAME}></${LNAME}-${ELNAME}>" > docs/demos/$NAME/$ELNAME.md

  # 写入 components/NAME.md 文件
  echo "
### ${ECNNAME}
${EDESCRIPTION}

<demo link=\"/demos/${NAME}/${ELNAME}\">
  <${LNAME}-${ELNAME}></${LNAME}-${ELNAME}>
  <template slot=\"code\">

<<< @/docs/demos/${NAME}/${ELNAME}.vue

  </template>
</demo>
" >> docs/components/$NAME.md

  # 添加导入
  IMPORT="import ${NAME}${ENAME} from '.\/${NAME}\/${ELNAME}'"

  sed -e "/\/\/ Shell: New Example import/i\\
$IMPORT\\
" docs/demos/index.js > script_tmp
  mv script_tmp docs/demos/index.js

  # 添加安装
  IMPORT="Vue.component(${NAME}${ENAME}.name, ${NAME}${ENAME})"
  sed -e "/\/\/ Shell: New Example install/i\\
\ \ $IMPORT\\
" docs/demos/index.js > script_tmp
  mv script_tmp docs/demos/index.js
fi