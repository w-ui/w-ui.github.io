webpackJsonp([61],{320:function(module,exports,__webpack_require__){eval("var Component = __webpack_require__(3)(\n  /* script */\n  null,\n  /* template */\n  __webpack_require__(513),\n  /* scopeId */\n  null,\n  /* cssModules */\n  null\n)\n\nmodule.exports = Component.exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi92dWUtbWFya2Rvd24tbG9hZGVyL19jYWNoZS9RcmNvZGUtMjYudnVlPzc4MjIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICBudWxsLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWI5YWRjZTAyXFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUXJjb2RlLTI2LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIhLi9+L3Z1ZS1tYXJrZG93bi1sb2FkZXIvX2NhY2hlL1FyY29kZS0yNi52dWVcbi8vIG1vZHVsZSBpZCA9IDMyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDYxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///320\n")},513:function(module,exports){eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _vm._m(0)\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'section\', [_c(\'h1\', [_vm._v("Qrcode 二维码组件")]), _vm._v(" "), _c(\'h3\', [_vm._v("概述")]), _vm._v(" "), _c(\'p\', [_vm._v("生成二维码")]), _vm._v(" "), _c(\'pre\', [_c(\'code\', {\n    staticClass: "language-html"\n  }, [_vm._v("<w-qrcode url=\\"https://github.com/w-ui\\" size=\\"128\\"></w-qrcode>\\n\\n")])]), _vm._v(" "), _c(\'h3\', [_vm._v("Demo")]), _vm._v(" "), _c(\'pre\', [_c(\'code\', {\n    staticClass: "language-html"\n  }, [_vm._v("<template>\\n  <div>\\n    <h3>url: https://github.com/w-ui</h3>\\n    <w-qrcode url=\\"https://github.com/w-ui\\" :size=\\"128\\"></w-qrcode>\\n  </div>\\n</template>\\n\\n<script>\\n    import Qrcode from \'packages/qrcode\'\\n\\n    export default {\\n      components: {\\n        \'w-qrcode\': Qrcode\\n      }\\n    }\\n<\/script>\\n\\n")])]), _vm._v(" "), _c(\'h3\', [_vm._v("Qrcode 属性介绍 Attributes")]), _vm._v(" "), _c(\'table\', [_c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("参数")]), _vm._v(" "), _c(\'th\', [_vm._v("说明")]), _vm._v(" "), _c(\'th\', [_vm._v("类型")]), _vm._v(" "), _c(\'th\', [_vm._v("可选值")]), _vm._v(" "), _c(\'th\', [_vm._v("默认值")])])]), _vm._v(" "), _c(\'tbody\', [_c(\'tr\', [_c(\'td\', [_vm._v("type")]), _vm._v(" "), _c(\'td\', [_vm._v("类型")]), _vm._v(" "), _c(\'td\', [_vm._v("String")]), _vm._v(" "), _c(\'td\', [_vm._v("default／mix")]), _vm._v(" "), _c(\'td\', [_vm._v("default")])]), _vm._v(" "), _c(\'tr\', [_c(\'td\', [_vm._v("url")]), _vm._v(" "), _c(\'td\', [_vm._v("地址")]), _vm._v(" "), _c(\'td\', [_vm._v("String")]), _vm._v(" "), _c(\'td\'), _vm._v(" "), _c(\'td\')]), _vm._v(" "), _c(\'tr\', [_c(\'td\', [_vm._v("image")]), _vm._v(" "), _c(\'td\', [_vm._v("融合图片地址")]), _vm._v(" "), _c(\'td\', [_vm._v("String")]), _vm._v(" "), _c(\'td\'), _vm._v(" "), _c(\'td\')]), _vm._v(" "), _c(\'tr\', [_c(\'td\', [_vm._v("filter")]), _vm._v(" "), _c(\'td\', [_vm._v("图片处理器")]), _vm._v(" "), _c(\'td\', [_vm._v("String／Function")]), _vm._v(" "), _c(\'td\', [_vm._v("threshold")]), _vm._v(" "), _c(\'td\', [_vm._v("threshold")])]), _vm._v(" "), _c(\'tr\', [_c(\'td\', [_vm._v("size")]), _vm._v(" "), _c(\'td\', [_vm._v("二维码尺寸")]), _vm._v(" "), _c(\'td\', [_vm._v("String")]), _vm._v(" "), _c(\'td\'), _vm._v(" "), _c(\'td\', [_vm._v("128")])])])])])\n}]}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi92dWUtbWFya2Rvd24tbG9hZGVyL19jYWNoZS9RcmNvZGUtMjYudnVlP2VmMmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywgW19jKCdoMScsIFtfdm0uX3YoXCJRcmNvZGUg5LqM57u056CB57uE5Lu2XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIFtfdm0uX3YoXCLmpoLov7BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwi55Sf5oiQ5LqM57u056CBXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwcmUnLCBbX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gIH0sIFtfdm0uX3YoXCI8dy1xcmNvZGUgdXJsPVxcXCJodHRwczovL2dpdGh1Yi5jb20vdy11aVxcXCIgc2l6ZT1cXFwiMTI4XFxcIj48L3ctcXJjb2RlPlxcblxcblwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIFtfdm0uX3YoXCJEZW1vXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwcmUnLCBbX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gIH0sIFtfdm0uX3YoXCI8dGVtcGxhdGU+XFxuICA8ZGl2PlxcbiAgICA8aDM+dXJsOiBodHRwczovL2dpdGh1Yi5jb20vdy11aTwvaDM+XFxuICAgIDx3LXFyY29kZSB1cmw9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS93LXVpXFxcIiA6c2l6ZT1cXFwiMTI4XFxcIj48L3ctcXJjb2RlPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgUXJjb2RlIGZyb20gJ3BhY2thZ2VzL3FyY29kZSdcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICd3LXFyY29kZSc6IFFyY29kZVxcbiAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcblwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIFtfdm0uX3YoXCJRcmNvZGUg5bGe5oCn5LuL57uNIEF0dHJpYnV0ZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYmxlJywgW19jKCd0aGVhZCcsIFtfYygndHInLCBbX2MoJ3RoJywgW192bS5fdihcIuWPguaVsFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwi6K+05piOXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0aCcsIFtfdm0uX3YoXCLnsbvlnotcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RoJywgW192bS5fdihcIuWPr+mAieWAvFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGgnLCBbX3ZtLl92KFwi6buY6K6k5YC8XCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGJvZHknLCBbX2MoJ3RyJywgW19jKCd0ZCcsIFtfdm0uX3YoXCJ0eXBlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCLnsbvlnotcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywgW192bS5fdihcIlN0cmluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCBbX3ZtLl92KFwiZGVmYXVsdO+8j21peFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCBbX3ZtLl92KFwiZGVmYXVsdFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd0cicsIFtfYygndGQnLCBbX3ZtLl92KFwidXJsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCLlnLDlnYBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywgW192bS5fdihcIlN0cmluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJyldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RyJywgW19jKCd0ZCcsIFtfdm0uX3YoXCJpbWFnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCBbX3ZtLl92KFwi6J6N5ZCI5Zu+54mH5Zyw5Z2AXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCJTdHJpbmdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJyksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcpXSksIF92bS5fdihcIiBcIiksIF9jKCd0cicsIFtfYygndGQnLCBbX3ZtLl92KFwiZmlsdGVyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCLlm77niYflpITnkIblmahcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywgW192bS5fdihcIlN0cmluZ++8j0Z1bmN0aW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCJ0aHJlc2hvbGRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJywgW192bS5fdihcInRocmVzaG9sZFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd0cicsIFtfYygndGQnLCBbX3ZtLl92KFwic2l6ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGQnLCBbX3ZtLl92KFwi5LqM57u056CB5bC65a+4XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCJTdHJpbmdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RkJyksIF92bS5fdihcIiBcIiksIF9jKCd0ZCcsIFtfdm0uX3YoXCIxMjhcIildKV0pXSldKV0pXG59XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iOWFkY2UwMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtbWFya2Rvd24tbG9hZGVyL19jYWNoZS9RcmNvZGUtMjYudnVlXG4vLyBtb2R1bGUgaWQgPSA1MTNcbi8vIG1vZHVsZSBjaHVua3MgPSA2MSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///513\n')},559:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(320);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZG9jcy9RcmNvZGUubWQ/OGFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1tYXJrZG93bi1sb2FkZXIvX2NhY2hlL1FyY29kZS0yNi52dWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kb2NzL1FyY29kZS5tZFxuLy8gbW9kdWxlIGlkID0gNTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gNjEiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///559\n")}});