# StuffBox PWA - 物品管理应用

## 简介

StuffBox 是一款本地优先的物品管理 PWA，帮你追踪所有家居物品、资产价值和使用记录。数据全部存储在设备本地（localStorage），无需注册账号。

## 功能特性

- 📦 **物品管理** - 添加/编辑/删除物品，支持品牌、价格、日期等详细信息
- 🏷️ **场景分类** - 按场景（客厅/卧室等）和子分类组织物品
- 📊 **财务统计** - 自动计算 CPW（每次使用成本）和 CPD（每日成本）
- ⏰ **到期提醒** - 追踪有保质期的物品，按状态分组显示
- 📝 **使用记录** - 左滑物品快速记录一次使用
- 💾 **数据导出** - 导出 CSV 格式备份数据

## 如何添加到手机主屏幕

### iPhone / iPad (Safari)

1. 用 Safari 打开 `index.html`（或部署后的网址）
2. 点击底部 **分享按钮**（方框+向上箭头图标）
3. 向下滚动，点击 **"添加到主屏幕"**
4. 输入名称（默认 StuffBox），点击 **"添加"**
5. 主屏幕出现 StuffBox 图标，点击即可全屏启动

> ⚠️ iOS 必须使用 Safari 才能添加 PWA 到主屏幕，Chrome/Firefox 不支持

### Android (Chrome)

1. 用 Chrome 打开应用网址
2. 点击右上角 **三点菜单**
3. 点击 **"添加到主屏幕"** 或 **"安装应用"**
4. 点击 **"添加"** 确认
5. 主屏幕出现图标，点击即可全屏启动

### 本地使用方法

**方法一：直接用浏览器打开**
```
直接双击 index.html 文件，在浏览器中打开
注意：Service Worker 需要 HTTPS 或 localhost 才能注册
```

**方法二：本地服务器（推荐，支持完整 PWA 功能）**
```bash
# 使用 Python
python3 -m http.server 8080
# 然后访问 http://localhost:8080

# 使用 Node.js
npx serve .
# 然后访问提示的地址
```

**方法三：部署到网络**

将 4 个文件上传到任何静态托管服务：
- GitHub Pages（免费）
- Vercel（免费）
- Netlify（免费）
- 腾讯云 COS / 阿里云 OSS

## 数据说明

- 数据存储在浏览器 `localStorage`，key 为 `stuffbox_data`
- 卸载应用或清除浏览器数据会丢失数据，请定期在设置页导出备份
- 导出格式为 CSV，可用 Excel 打开

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 完整应用（所有组件内嵌，约 2000+ 行） |
| `manifest.json` | PWA 配置（图标、名称、显示模式等） |
| `sw.js` | Service Worker（离线缓存支持） |
| `README.md` | 本说明文件 |

## 技术栈

- React 18 (CDN，无需构建)
- Babel Standalone (JSX 转译)
- localStorage (数据持久化)
- Service Worker (离线支持)
- CSS-in-JS (仿 iOS 样式)
