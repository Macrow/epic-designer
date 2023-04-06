// 注册ant-design-vue ui
import { PluginManager } from "../pluginManager";
import Input from "./Antd/input";
import InputNumber from "./Antd/inputNumber";
import InputPassword from "./Antd/inputPassword";
import Radio from "./Antd/radio";
import Checkbox from "./Antd/checkbox";
import Select from "./Antd/select";
import TimePicker from "./Antd/timePicker";
import DatePicker from "./Antd/datePicker";
import Cascader from "./Antd/cascader";
import Switch from "./Antd/switch";
import UploadImage from "./Antd/uploadImage";
import UploadFile from "./Antd/uploadFile";
import Card from "./Antd/card";
import Row from "./Antd/row";
import Col from "./Antd/col";
import Tabs from "./Antd/tabs";
import TabPane from "./Antd/tabPane";
import KForm from "./Antd/form";
import Button from "./Antd/button";
import colorPicker from "./Antd/color-picker";

// 兼容性样式
import "./Antd/index.less";

export function useAntd(pluginManager: PluginManager) {
  // 异步加载组件
  pluginManager.component("Modal", () => import("ant-design-vue/lib/modal"));
  pluginManager.component(
    "FormItem",
    () => import("ant-design-vue/lib/form/FormItem")
  );
  pluginManager.component("Collapse", () => import("ant-design-vue/lib/collapse"));
  pluginManager.component("CollapseItem", () => import("ant-design-vue/lib/collapse/CollapsePanel"));
  pluginManager.component("Tabs", () => import("ant-design-vue/lib/tabs"));
  pluginManager.component("TabPane", async() => (await import("ant-design-vue/lib/tabs")).TabPane);

  const componentArray = [
    KForm,
    Input,
    InputNumber,
    InputPassword,
    Radio,
    Checkbox,
    Select,
    TimePicker,
    DatePicker,
    Cascader,
    Switch,
    UploadImage,
    UploadFile,
    Card,
    Row,
    Col,
    Tabs,
    TabPane,
    Button,
    colorPicker,
  ];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });

  // 设置分组显示
  pluginManager.setSchemaGroup([
    {
      title: "输入组件",
      list: [
        "input",
        "textarea",
        "number",
        "password",
        "select",
        "checkbox",
        "radio",
        "date",
        "time",
        "rate",
        "slider",
        "upload-file",
        "upload-image",
        "cascader",
        "treeSelect",
        "batch",
        "editor",
        "switch",
        "button",
        "text",
        "html",
        "form",
        "color-picker",
        "slider",
      ],
    },
    {
      title: "布局组件",
      list: ["card", "row", "tabs"],
    },
  ]);
}
