import { expect, use } from 'chai'

const server = require('../index');

import request from 'supertest'

const testServer = 'http://localhost:6200'


describe('Basic routes', () => {

    it('should add channel name', async () => {
        const res = await request(testServer)
            .post('/v1/channels').send({
                name: 'test',
            })

            expect(res.status).to.be.equal(200)
    })

    it('should add message to channel', async () => {
        const res = await request(testServer)
            .post('/v1/channels/1/messages').send({
                title: 'test',
                content: 'content'
            })

            expect(res.status).to.be.equal(200)
    })

    it('should get channels', async () => {
        const res = await request(testServer)
            .get('/v1/channels/1/messages')

            expect(res.status).to.be.equal(200)
    })
});