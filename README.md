# 正大鸡蛋溯源

正大鸡蛋产品溯源查询系统，基于 React + Ant Design Mobile 构建。

## 技术栈

- **React 18** + TypeScript
- **Vite** 构建工具
- **Ant Design Mobile** 移动端组件库
- **CSS3** 绘制图形（鸡蛋、鸡妈妈、太阳、云朵等）

## 项目结构

```
src/
├── App.tsx              # 主组件（TabBar + 页面切换）
├── App.css              # 全局样式
├── main.tsx             # React 入口
└── components/
    ├── AboutPage.tsx    # 关于正大鸡蛋
    ├── CertPage.tsx     # 合格证书查询
    ├── TracePage.tsx    # 全程溯源
    └── BottomNav.tsx    # 底部导航栏
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

启动后打开浏览器访问 `http://localhost:5173`

### 3. 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录，可直接部署到任何静态托管服务。

### 4. 预览生产构建

```bash
npm run preview
```

## 功能说明

### 三个标签页

| 标签页 | 功能 |
|--------|------|
| 关于正大鸡蛋 | 品牌介绍、农场场景、品牌实力展示 |
| 合格证书 | 企业选择（Picker）、生产日期选择（DatePicker）、证书查询 |
| 全程溯源 | 追溯号输入、五步溯源流程、二维码展示 |

### 使用的 Ant Design Mobile 组件

- `TabBar` - 底部导航
- `NavBar` - 顶部标题栏
- `Picker` - 企业名称选择（底部弹出滚轮）
- `DatePicker` - 生产日期选择（底部弹出日历）
- `Button` - 查询按钮
- `Card` / `List` - 内容展示
- `Input` - 追溯号输入
- `Steps` - 溯源流程时间线
- `Toast` - 操作提示

## 部署

### 方式一：Netlify Drop（最简单，无需注册）

1. 打开 [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. 把 `dist/` 文件夹直接拖拽到网页上
3. 立刻获得公网访问链接

### 方式二：GitHub Pages

1. 把代码推送到 GitHub 仓库
2. 开启 Settings -> Pages -> Source
3. 选择 GitHub Actions 或分支部署

### 方式三：Vercel

1. 注册 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库
3. 自动部署

## 浏览器兼容

- iOS Safari 12+
- Android Chrome 80+
- 微信内置浏览器

## 注意事项

- 页面针对移动端设计，建议在手机或浏览器开发者工具的移动端模式下查看
- 最大宽度限制为 750px，居中显示
