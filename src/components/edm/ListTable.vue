<template>
  <table :width="width"  cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;border-collapse:collapse; text-align: left;line-height: 22px;font-size: 12px;font-family: 微软雅黑;">
    <tr v-for="(item, index) in dataSource" :key="index">
      <td v-if="hasSpace" style="width: 20px;"></td>
      <td v-if="isLetter" width="20" :style="textStyle">{{ getLetter(index+1) }}</td>
      <td v-else :style="textStyle" width="20">{{listType || `${index + 1 + indexAddNumber}.`}}</td>
      <td :style="textStyle" v-html="item.text"></td>
    </tr>
    <slot></slot>
  </table>
</template>

<script>
const defaultStyle = {
  "text-align": "left",
  "line-height": "22px",
  "font-family": "微软雅黑",
  "font-size": "12px",
  "vertical-align": "top"
};

const letterStrategy = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
}
export default {
  data() {
    const textStyle = Object.assign(defaultStyle, this.tStyle);
    return {
      textStyle
    };
  },
  props: {
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    },
    tStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    listType: String,
    hasSpace: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "634"
    },
    isLetter: {
      type: Boolean,
      default: false,
    },
    indexAddNumber: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    getLetter(num) {
      return letterStrategy[num] + '.'
    }
  }
};
</script>
