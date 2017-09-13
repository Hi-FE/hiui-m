<template>
  <demo title="Swipe" class="swipe-demo">
    <demo-item name="default" description="默认" :code="code">
      <Swipe>
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :loop="false">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
    </demo-item>
    <demo-item name="index" description="下标" :code="index_code">
      <p>当前下标是 {{ index }}</p>
      <Swipe v-model="index">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <br>
      <p>当前下标是 {{ trigger_index }}</p>
      <Swipe v-model="trigger_index" :trigger="'progress'">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>滑动过程中改变index</p></div>
        </SwipeSlide>
      </Swipe>
      <Swipe :index="true">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>显示index</p></div>
        </SwipeSlide>
      </Swipe>
      <Swipe :index="true" :index_trigger="'hover'">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>index hover触发滑动</p></div>
        </SwipeSlide>
      </Swipe>
      <Swipe :index="true" :index_x_offset="15" :index_y_offset="-10">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>调整下标偏差</p></div>
        </SwipeSlide>
      </Swipe>
    </demo-item>
    <demo-item name="arrow" description="箭头" :code="arrow_code">
      <Swipe>
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>默认hover显示左右箭头</p> </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :arrow="true">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>总是显示箭头</p> </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :arrow="false">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>无箭头</p> </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :arrow="true" :outer_arrow="true">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>外部箭头</p> </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :arrow="true" :outer_arrow="true" :arrow_offset="-15">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} <p>调整箭头偏差</p> </div>
        </SwipeSlide>
      </Swipe>
    </demo-item>
    <demo-item name="custom slide" description="自定义滑动" :code="sliding_code">
      <p>同时展示多个Slide</p>
      <Swipe :preview="2" :between="12">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :preview="3" :between="12">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <p>多个Slide同时滑动</p>
      <Swipe :preview="2" :between="12" :sliding_num="2">
        <SwipeSlide v-for="(n, index) in 6" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
    </demo-item>
    <demo-item name="coverflow" description="coverflow过渡" :code="coverflow_code">
      <Swipe :coverflow="true">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :coverflow="true" :preview="2">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :coverflow="true" :preview="3">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
    </demo-item>
    <demo-item name="free" description="自由滑动" :code="free_code">
      <Swipe>
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <Swipe :free="true">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
    </demo-item>
    <demo-item name="event" description="事件" :code="event_code">
      <Swipe ref="swiper">
        <SwipeSlide v-for="(n, index) in 5" :key="index">
          <div class="content"> {{ index }} </div>
        </SwipeSlide>
      </Swipe>
      <Btn @click.native="$refs.swiper.$emit('slide-prev')">前一个</Btn>
      <Btn @click.native="$refs.swiper.$emit('slide-next')">后一个</Btn>
      <Btn @click.native="$refs.swiper.$emit('slide-to', 1)">到第二个</Btn>
    </demo-item>
  </demo>
</template>

<style lang="stylus" scoped>
  @import '../../style/';
  .content { height:100px;color:#fff;text-align:center }
  .hiui-swipe-slide:nth-child(n) .content { background-color:_red }
  .hiui-swipe-slide:nth-child(2n) .content { background-color: _blue }
  .hiui-swipe { margin-bottom:10px }
</style>

<script>
  export default {
    data () {
      return {
        test: false,
        index: 2,
        trigger_index: 0,
        code: `
<Swipe>
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{ index}} </div>
  </SwipeSlide>
</Swipe>
<Swipe :loop="false">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{ index}} </div>
  </SwipeSlide>
</Swipe>
        `,
        index_code: `
<p>当前下标是 {{ index }}</p>
<Swipe v-model="index">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
<br>
<p>当前下标是 {{ trigger_index }}</p>
<Swipe v-model="trigger_index" :trigger="'progress'">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} <p>滑动过程中改变index</p></div>
  </SwipeSlide>
</Swipe>
<Swipe :index="true">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} <p>显示index</p></div>
  </SwipeSlide>
</Swipe>
<Swipe :index="true" :index_trigger="'hover'">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} <p>index hover触发滑动</p></div>
  </SwipeSlide>
</Swipe>
<Swipe :index="true" :index_x_offset="15" :index_y_offset="-10">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{ index}} <p>调整下标偏差</p></div>
  </SwipeSlide>
</Swipe>
        `,
        arrow_code: `
<Swipe>
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} <p>默认hover显示左右箭头</p> </div>
  </SwipeSlide>
</Swipe>
<Swipe :arrow="true">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} <p>总是显示箭头</p> </div>
  </SwipeSlide>
</Swipe>
<Swipe :arrow="false">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} <p>无箭头</p> </div>
  </SwipeSlide>
</Swipe>
<Swipe :arrow="true" :outer_arrow="true">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{ index}} <p>外部箭头</p> </div>
  </SwipeSlide>
</Swipe>
<Swipe :arrow="true" :outer_arrow="true" :arrow_offset="-15">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{ index}} <p>调整箭头偏差</p> </div>
  </SwipeSlide>
</Swipe>
        `,
        sliding_code: `
<p>同时展示多个Slide</p>
<Swipe :preview="2" :between="12">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
<Swipe :preview="3" :between="12">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
<p>多个Slide同时滑动</p>
<Swipe :preview="2" :between="12" :sliding_num="2">
  <SwipeSlide v-for="(n, index) in 6" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
        `,
        coverflow_code: `
<Swipe :coverflow="true">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
<Swipe :coverflow="true" :preview="2">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
<Swipe :coverflow="true" :preview="3">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
        `,
        free_code: `
<Swipe>
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
<Swipe :free="true">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{index}} </div>
  </SwipeSlide>
</Swipe>
        `,
        event_code: `
<Swipe ref="swiper">
  <SwipeSlide v-for="(n, index) in 5" :key="index">
    <div class="content"> {{ index}} </div>
  </SwipeSlide>
</Swipe>
<Btn @click.native="$refs.swiper.$emit('slide-prev')">前一个</Btn>
<Btn @click.native="$refs.swiper.$emit('slide-next')">后一个</Btn>
<Btn @click.native="$refs.swiper.$emit('slide-to', 1)">到第二个</Btn>
        `
      }
    }
  }
</script>
