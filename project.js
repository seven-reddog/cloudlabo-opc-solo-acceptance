/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "B09",
  "slug": "solo-acceptance",
  "name": "软件交付自测工具",
  "desc": "记录测试步骤、预期与实际结果，汇总通过、失败和待测项。",
  "fields": [
    {
      "key": "project",
      "label": "软件项目",
      "type": "text",
      "value": "离线商品管理页"
    },
    {
      "key": "version",
      "label": "测试版本",
      "type": "text",
      "value": "v1.0"
    },
    {
      "key": "environment",
      "label": "测试环境",
      "type": "text",
      "value": "请填写实际浏览器与设备"
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "自测记录",
      "columns": [
        {
          "key": "feature",
          "label": "测试项",
          "type": "text"
        },
        {
          "key": "steps",
          "label": "操作步骤",
          "type": "textarea"
        },
        {
          "key": "expected",
          "label": "预期结果",
          "type": "text"
        },
        {
          "key": "actual",
          "label": "实际结果",
          "type": "text"
        },
        {
          "key": "status",
          "label": "状态",
          "type": "select",
          "options": [
            "未测",
            "通过",
            "失败",
            "不适用"
          ]
        }
      ],
      "rows": [
        {
          "feature": "关键词搜索",
          "steps": "输入水杯",
          "expected": "只显示匹配记录",
          "actual": "",
          "status": "未测"
        },
        {
          "feature": "CSV导出",
          "steps": "点击导出并打开文件",
          "expected": "列名和记录完整",
          "actual": "",
          "status": "未测"
        },
        {
          "feature": "手机页面",
          "steps": "在手机浏览器打开",
          "expected": "文字和按钮可用",
          "actual": "",
          "status": "未测"
        }
      ]
    }
  ],
  "skill": true,
  "dirname": "solo-acceptance",
  "example": {
    "_files": {},
    "project": "离线商品管理页",
    "version": "v1.0",
    "environment": "请填写实际浏览器与设备",
    "items": [
      {
        "feature": "关键词搜索",
        "steps": "输入水杯",
        "expected": "只显示匹配记录",
        "actual": "",
        "status": "未测"
      },
      {
        "feature": "CSV导出",
        "steps": "点击导出并打开文件",
        "expected": "列名和记录完整",
        "actual": "",
        "status": "未测"
      },
      {
        "feature": "手机页面",
        "steps": "在手机浏览器打开",
        "expected": "文字和按钮可用",
        "actual": "",
        "status": "未测"
      }
    ]
  },
  "inputTitle": "测试记录",
  "outputTitle": "自测报告",
  "action": "生成自测报告"
};
