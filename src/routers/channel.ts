
import Router from 'koa-router'
import ChannelController from '../controllers/channel'

const routerInit = new Router({ prefix: '/v1/channels' })

/**
 * @swagger
 * definitions:
 *   Success:
 *     properties:
 *       code:
 *         type: number
 *         title: 成功的状态码
 *       msg:
 *         type: string
 *         title: 提示语
 */
/**
 * @swagger
 * definitions:
 *   Channel:
 *     properties:
 *       id:
 *         type: integer
 *         title: id
 *       name:
 *         type: string
 *         title: 主题名称
 */
/**
 * @swagger
 * definitions:
 *   Message:
 *     properties:
 *       channel:
 *         type: number
 *         required: true
 *       title:
 *         type: string
 *         title: 消息标题
 *       content:
 *          type: string
 *          title: 消息内容
 *       pageNo:
 *         type: number
 *         title: 当前页
 *       pageSize:
 *         type: number
 *         title: 每页数量
 *         default: 10
 */

/**
 * @swagger
 * /v1/channels:
 *   post:
 *     description: 新增主题
 *     tags: [channel]
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: body
 *       name: "channel"
 *       description: "主题名称"
 *       required: true
 *       schema:
 *          properties:
 *              name:
 *                type: string
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *             $ref: '#/definitions/Success'
 *
 */
routerInit.post('/', ChannelController.addChannel)
/**
 * @swagger
 * /v1/channels/{channelId}/messages:
 *   post:
 *     description: 新增通道信息
 *     tags: [channel]
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: body
 *        name: "message"
 *        description: "信息"
 *        required: true
 *        schema:
 *          properties:
 *              title:
 *                type: string
 *              content:
 *                type: string
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *             $ref: '#/definitions/Message'
 *
 */
routerInit.post('/:channelId/messages', ChannelController.addMessage)
/**
 * @swagger
 * /v1/channels/{channelId}/messages:
 *   get:
 *     description: 获取 channel messages
 *     tags: [channel]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *             $ref: '#/definitions/Success'
 *
 */
routerInit.get('/:channelId/messages', ChannelController.getList)

export default routerInit