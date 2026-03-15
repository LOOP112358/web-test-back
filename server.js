const express = require('express');
const cors = require('cors');
const app = express();

// 1. 动态获取端口，如果 Render 没指定，默认用 3000
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 2. 增加一个根路由，防止出现 "Cannot GET /"
app.get('/', (req, res) => {
    res.send('后端服务器运行正常！请向 /analyze 发送 POST 请求。');
});

// 接收前端发来的 POST 请求
app.post('/analyze', (req, res) => {
    const { anime, character } = req.body;
    
    // 如果没有收到数据，给一个友好的提示
    if (!anime || !character) {
        return res.status(400).json({ error: "请提供动画和角色名称" });
    }

    const mockReport = `后端已接收：你喜欢的动画是 ${anime}，角色是 ${character}。经过服务器深度数据分析，你是一个资深的 ${anime} 粉丝！`;
    res.json({ analysis: mockReport });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`后端服务器已在端口 ${PORT} 启动`);
});