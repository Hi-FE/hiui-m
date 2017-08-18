<template>
  <demo title="Loadmore" class="loadmore-demo">
    <!-- Default -->
    <demo-item name="default" description="默认" :code="code">
      <Btn @click="setShow(0)" class="show-btn">Show</Btn>
      <Loadmore v-if="show[0]" @load-method="getNextPage" :done="cur >= total">
        <div v-for="item in list" class="block">
          List.{{ item }}
        </div>
      </Loadmore>
    </demo-item>

    <!-- error -->
    <demo-item name="error" description="错误处理" :code="code">
      <Btn @click="setShow(2)" class="show-btn">Show</Btn>
      <Loadmore v-if="show[2]" @load-method="getNextPage" :done="cur >= total">
        <div v-for="item in list" class="block">
          List.{{ item }}
        </div>
      </Loadmore>
    </demo-item>

    <!-- Slot -->
    <demo-item name="slot" description="自定义Slot内容" :code="slot_code">
      <Btn @click="setShow(1)" class="show-btn">Show</Btn>
      <Loadmore v-if="show[1]" @load-method="getNextPage" :done="cur >= total">
        <div v-for="item in list" class="block">
          List.{{ item }}
        </div>
        <template slot="loading">
          <Icon name="heart" color="rgb(255, 66, 66)" class="float-icon"></Icon>
          Loading more...
        </template>
        <template slot="loadmore" scope="props">
          <Btn @click="props.loadmore" class="blue-btn">点击加载更多</Btn>
        </template>
        <template slot="error" scope="props">
          <Btn @click="props.loadmore" class="error-btn">出错啦，重新加载</Btn>
        </template>
      </Loadmore>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';

  .block {
    height: 200px;
    width: 100%;
    color: _white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  _colors = _blue _red _green _yellow _grey;
  for color, i in _colors {
    .block:nth-child(5n + {i % 5 + 1}) {
      background-color: color;
    }
  }

  .show-btn {
    margin-bottom: 10px;
  }

  .blue-btn {
    width: 80%;
    height: 44px;
    color: _white;
    border-color: _blue;
    background-color: _blue;
  }

  .error-btn {
    width: 80%;
    height: 44px;
    color: _white;
    border-color: _red;
    background-color: _red;
  }

  .float-icon {
    margin-right: 10px;
    animation: float 2s infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(2px);
    }
    50% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(2px);
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        cur: 1,
        total: 10,
        show: [false, false, false],
        count: 5,
        timer: null,
        list: [],
        code: `
<Loadmore v-if="show" @load-method="getNextPage" :done="cur >= total">
  <div v-for="item in list" class="block">
    {{ item }}
  </div>
</Loadmore>

//...
getNextPage (next, err) {
  this.cur++

  this.getList()
  .then(next)
  .catch((err_msg) => err(err_msg))
}
        `,
        slot_code: `
<Loadmore v-if="show" :interval="4" :offset="0" @load-method="getNextPage" :done="cur >= total">
  <div v-for="item in list" class="block">
    {{ item }}
  </div>
  <template slot="loading">
    <Icon name="heart" color="rgb(255, 66, 66)" class="float-icon"></Icon>
    Loading more...
  </template>
  <template slot="loadmore" scope="props">
    <Btn @click="props.loadmore" class="blue-btn">点击加载更多</Btn>
  </template>
  <template slot="error" scope="props">
    <Btn @click="props.loadmore" class="error-btn">出错啦，重新加载</Btn>
  </template>
</Loadmore>

//...
getNextPage (next, err) {
  this.cur++

  this.getList()
  .then(next)
  .catch((err_msg) => err(err_msg))
}
        `
      }
    },
    methods: {
      setShow (index) {
        this.cur = 1
        this.list = []
        clearTimeout(this.timer)
        this.getList(0)

        this.show = this.show.map((bool, i) => i === index && !bool)
      },
      getNextPage (next, err) {
        this.cur++

        this.getList()
        .then(next)
        .catch((err_msg) => err(err_msg))
      },
      getList (time = 1000) {
        // 模拟请求加载列表数据
        return new Promise((resolve, reject) => {
          this.timer = setTimeout(() => {
            if (this.cur > 1 && this.show.indexOf(true) === 2) {
              this.cur--
              return reject('加载失败')
            }
            let data = new Array(this.count).fill(this.cur)
            this.list = this.list.concat(data)

            resolve()
          }, time)
        })
      }
    }
  }
</script>
