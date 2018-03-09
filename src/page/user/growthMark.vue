<template>
  <div>
    <mu-appbar title="成长印记" class="Top-Class" titleClass="titleclass">
      <mu-icon value="format_align_center" slot="right" @click="toggle" />
      <mu-icon value="keyboard_arrow_left" slot="left" @click="RouterOne" />
    </mu-appbar>
    <mu-timeline>
      <mu-timeline-item>
        <span slot="time">2017年 6月 1日</span>
        <span slot="des">发起第一个pr</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 6日</span>
        <span slot="des">发起第一个issue</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 12日</span>
        <span slot="des">添加backTop组件</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 16日</span>
        <span slot="des">加入Muse-UI org<br/>添加breadcrumb组件</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 19日</span>
        <span slot="des">添加FAQ模块</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 20日</span>
        <span slot="des">添加Layout</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 19日</span>
        <span slot="des">添加FAQ模块</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 20日</span>
        <span slot="des">添加Layout</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 19日</span>
        <span slot="des">添加FAQ模块</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 20日</span>
        <span slot="des">添加Layout</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 19日</span>
        <span slot="des">添加FAQ模块</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span slot="time">2017年 6月 20日</span>
        <span slot="des">添加Layout</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span>更多</span>
      </mu-timeline-item>
    </mu-timeline>
  </div>
</template>
<style lang="less">
  .popover-class{
    width: 100%;
    padding-right: 1em;
    margin-top: 55px;
    border-radius: 0px !important;
    background-color: #474a4f !important;
  }
  .bottom-munu-class{
    color: #ffffff;
  }
  .titleclass{
    font-size: 1.2em;
    text-align: center;
  }

  .content {
    text-align: center;
  }
</style>
<style scoped lang="less">
  .Top-Class{
    position:fixed;
    top: 0;
  }

</style>

