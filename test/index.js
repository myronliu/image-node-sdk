const {
    ImageClient
} = require('../index');
const {
    ProxyUrl,
    AppId,
    SecretId,
    SecretKey
} = require('../config');

describe.only('ai service', () => {
    it('图片标签 - imgTagDetect', async () => {
        let imageUrl = 'https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg';
        let imgClient1 = new ImageClient({ AppId, SecretId, SecretKey });
        let result = await imgClient1
            .setProtocol('http')
            .imgTagDetect({
                data: {
                    url: imageUrl
                }
            });

        // console.log(result.body, typeof result.body);
        let data = JSON.parse(result.body);
        expect(data).toEqual({
            'code': 0,
            'message': 'success',
            'tags': [{ 'tag_name': '盘子', 'tag_confidence': 45 }, { 'tag_name': '碗', 'tag_confidence': 23 }, { 'tag_name': '菜品', 'tag_confidence': 61 }]
        });
    }, 20000);
});