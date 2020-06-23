var column = {
  "column_title_color": '#00A0E9',
  "column_color": ["#32CCCA", "#FFFF00", "#CC3266"],
  "column_font_color": "#00A0E9",
  "column_mine_tab": [{
      name: "总人数",
      icon: "roundRect",
      textStyle: {
        color: "#00A0E9" // 图例文字颜色
      }
    },
    {
      name: "待提人员",
      icon: "roundRect",
      textStyle: {
        color: "#00A0E9" // 图例文字颜色
      }
    },
    {
      name: "已提人员",
      icon: "roundRect",
      textStyle: {
        color: "#00A0E9" // 图例文字颜色
      }
    }
  ],
  "column_menu": ["提讯", "提解", "家属", "律师"],
  "column_series": [{
      name: "总人数",
      type: "bar",
      data: [8, 8, 8, 8],
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            textStyle: {
              //数值样式
              color: "white",
              fontSize: 12
            }
          }
        }
      }
    },
    {
      name: "待提人员",
      type: "bar",
      data: [5, 5, 5, 5],
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            textStyle: {
              //数值样式
              color: "white",
              fontSize: 12
            }
          }
        }
      }
    },
    {
      name: "已提人员",
      type: "bar",
      data: [3, 3, 3, 3],
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            textStyle: {
              //数值样式
              color: "white",
              fontSize: 12
            }
          }
        }
      }
    }
  ]
}
var cake={
  "cake_title":{
    text: '标题',
    textStyle: {
      fontSize: 26,
      color: 'red'
    },
    x: "left"
  },
  "cake_color":['#7EC0EE', '#FF9F7F', '#FFD700', '#C9C9C9', '#E066FF', '#C0FF3E'],//调色盘
  "cake_bgcolor":'pink',
  "cake_legend":{
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
    orient: 'vertical',
    // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
    x: 'left',
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
    y: 'center',
    itemWidth: 24, // 设置图例图形的宽
    itemHeight: 18, // 设置图例图形的高
    textStyle: {
      color: '#666' // 图例文字颜色
    },
    // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
    itemGap: 25,
    backgroundColor: '#eee', // 设置整个图例区域背景颜色
    data: ['北京', '上海', '广州', '深圳', '郑州']
  },
  "cake_tooltip":{
    // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
    trigger: 'item',
    showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
    hideDelay: 20, // 隐藏延迟，单位ms
    backgroundColor: '#093F72', // 提示框背景颜色
    textStyle: {
      fontSize: '16px',
      color: '#fff' // 设置文本颜色 默认#FFF
    },
    // formatter设置提示框显示内容
    // {a}指series.name  {b}指series.data的name
    // {c}指series.data的value  {d}%指这一部分占总数的百分比
    formatter: '{a} <br/>{b} : {c}个 ({d}%)'
  },
  "cake_series":[{
    name: '生源地',
    type: 'pie',
    hoverAnimation:false,//鼠标移上去不突出显示
    // radius: '50%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
    radius: ['0%', '80%'], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
    center: ['50%', '50%'], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
    data: [{
        value: 335,
        name: '北京'
      },
      {
        value: 310,
        name: '上海'
      },
      {
        value: 234,
        name: '广州'
      },
      {
        value: 135,
        name: '深圳'
      },
      {
        value: 148,
        name: '郑州'
      }
    ],
    // itemStyle 设置饼状图扇形区域样式
    itemStyle: {
      // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
      // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
      emphasis: {
        shadowBlur: 5,
        shadowOffsetX: 0,
        shadowColor: 'rgba(230, 230, 230)'
      }
    },
    // 设置值域的那指向线
    labelLine: {
      normal: {
        show: true // show设置线是否显示，默认为true，可选值：true ¦ false
      }
    },
    // 设置值域的标签
    label: {
      normal: {
        position: 'inner', // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
        // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
        // {a}指series.name  {b}指series.data的name
        // {c}指series.data的value  {d}%指这一部分占总数的百分比
        formatter: '{c}'
      }
    }
  }]
}
var line={
  "line_color":['#00EE00', '#FF9F7F','#FFD700'],
  "line_title": {
    text: '折线图',
    textStyle:{
      color:'white'
    },
    x: 'center'
  },
  "line_legend":{
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
    orient: 'horizontal',
    // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
    x: 'left',
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
    y: 'top',
    data: ['预期','实际','假设'],
    textStyle:{
      color:'white'
    },
  },
  "line_xAxis":{
    name: '周几',
    type: 'category',
    axisLine: {
      lineStyle: {
        // 设置x轴颜色
        color: '#87CEFAE'
      }
    },
    // 设置X轴数据旋转倾斜
    axisLabel: {
      rotate: 0, // 旋转角度
      interval: 0  //设置X轴数据间隔几个显示一个，为0表示都显示
      },
    // boundaryGap值为false的时候，折线第一个点在y轴上
    boundaryGap: true,
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    splitLine: {
      show: false //去掉网格线
    }
  },
  "line_yAxis":{
    name: '数值',
    type: 'value',
    // min:0, // 设置y轴刻度的最小值
    // max:1800,  // 设置y轴刻度的最大值
    splitNumber:9,  // 设置y轴刻度间隔个数
    axisLine: {
      lineStyle: {
        // 设置y轴颜色
        color: '#87CEFA'
      }
    },
    splitLine: {
      show: false //去掉网格线
    }
  },
  "line_grid":{
    top: '20%',   // 等价于 y: '16%'
    left: '3%', 
    right: '8%',
    bottom: '3%',
    containLabel: true
},
  "line_series":[
    {
      name: '预期',
      data: [820, 932, 301, 1434, 1290, 1330, 1320],
      type: 'line',
      // 设置小圆点消失
      // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
      // symbol: '',
      symbolSize:5,
      itemStyle:{
        normal:{
          // 拐点上显示数值
          label : {
          show: true
          },
          borderColor:'#00EE00',  // 拐点边框颜色
          lineStyle:{                 
            // width:5,  // 设置线宽
            type:'solid'  //'dotted'虚线 'solid'实线
          }
        }
      },
      // 设置折线弧度，取值：0-1之间
      smooth: 0.5,
    },
    {
      name: '实际',
      data: [620, 732, 941, 834, 1690, 1030, 920],
      type: 'line',
      // 设置折线上圆点大小
      symbolSize:5,
      itemStyle:{
        normal:{
          // 拐点上显示数值
          label : {
          show: true
          },
          borderColor:'red',  // 拐点边框颜色
          lineStyle:{                 
            // width:5,  // 设置线宽
            type:'solid'  //'dotted'虚线 'solid'实线
          }
        }
      },
      smooth: 0.5,
    },
    {
      name: '假设',
      data: [120, 232, 541, 134, 290, 130, 120],
      type: 'line',
      // 设置折线上圆点大小
      symbolSize:5,
      // 设置拐点为实心圆
      // symbol:'circle',            
      itemStyle: {
        normal: {
          // 拐点上显示数值
          label : {
            show: true
          },
          lineStyle:{
            // 使用rgba设置折线透明度为0，可以视觉上隐藏折线
            // color: 'rgba(0,0,0,0)'
          }
        }
      },
      smooth: 0.5,
    }
  ]
}

var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    column: column,
    cake:cake,
    line:line
  },
  mounted: function () {
    // 柱状图
    var column = echarts.init(document.getElementById('column'));
    var optionColumn = {
      title: {
        // text: '未来一周气温变化',
        subtext: "单位：人",
        subtextStyle: {
          color: this.column.column_title_color
        }
      },
      color: this.column.column_color,
      textStyle: {
        // fontSize:16,
        color: this.column.column_font_color
      },
      grid: {
        left: "40px", //距离左边的距离
        right: "30px", //距离右边的距离
        bottom: "20px", //距离下边的距离
        top: "40px" //距离上边的距离
      },
      tooltip: {},
      legend: {
        // orient: 'vertical',
        // x:'right',      //可设定图例在左、右、居中
        // y:'center',     //可设定图例在上、下、居中
        // padding:[0,50,0,0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        data: this.column.column_mine_tab
      },
      xAxis: {
        data: this.column.column_menu,
        axisLine: {
          lineStyle: {
            color: "#00A0E9"
          }
        },
        splitLine: {
          show: false //去掉网格线
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: "#00A0E9"
          }
        },
        splitLine: {
          show: false //去掉网格线
        }
      },
      series: this.column.column_series
    };
    
    //饼状图
    var cake = echarts.init(document.getElementById('cake'));
    var optionCake={
      title: this.cake.cake_title,
      color: this.cake.cake_color,
      backgroundColor: this.cake.cake_bgcolor,
      legend: this.cake.cake_legend,
      tooltip: this.cake.cake_tooltip,
      series: this.cake.cake_series
    };
    
    //折线图
    var line = echarts.init(document.getElementById('line'));
    var optionLine = {
      color: this.line.line_color,
      title:this.line.line_title,
      legend: this.line.line_legend,
      //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
      grid: this.line.line_grid,

      // 提示框
      tooltip: {
        trigger: 'axis'
      },
      //工具框，可以选择
      toolbox: {
          feature: {
              // saveAsImage: {} //下载工具
          }
      },
      xAxis: this.line.line_xAxis,

      yAxis: this.line.line_yAxis,

      series: this.line.line_series
    };


// column.setOption(optionColumn);
// cake.setOption(optionCake);
    line.setOption(optionLine);
  }
})