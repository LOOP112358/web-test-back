// server.js (后端代码)
const express = require('express');
const cors = require('cors'); // 解决前端访问后端的跨域问题
const app = express();

app.use(cors());
app.use(express.json());

// 接收前端发来的 POST 请求
app.post('/analyze', (req, res) => {
    const { anime, character } = req.body;

    // TODO: 这里就是以后你要放“爬虫”逻辑的地方
    // 目前先返回一个模拟数据
    const mockReport = `后端已接收：你喜欢的动画是 ${anime}，角色是 ${character}。经过服务器深度数据分析，你是一个资深的 ${anime} 粉丝！`;

    res.json({ analysis: mockReport });
});

app.listen(3000, () => {
    console.log('后端服务器已启动，监听端口 3000');
});