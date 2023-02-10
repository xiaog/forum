import { Context } from 'koa'

const { channelModel, messageModel } = require('../models/index')
const Joi = require('joi')
export default class ChannelController {
    /**
     * 获取应用列表
     * @param {Context} ctx
     * @memberof ChannelController
     */
    public static async getList(ctx: Context) {
        const channelId: number = ctx.params.channelId
        const request: any = ctx.request.body
        const schema = Joi.object({
            pageSize: Joi.number().required(),
            pageNo: Joi.number().required(),
        })

        try {
            await schema.validateAsync(request)

            const messageList = await messageModel.findAndCountAll({
                where: {
                    channel: channelId
                },
                offset: request.pageSize * (request.pageNo - 1),
                limit: request.pageSize
            })

            ctx.status = 200
            ctx.body = {
                code: 0,
                data: messageList.rows,
                msg: '成功',
            }
        } catch (error) {
            let errorMessage = ''

            if (error instanceof Error) {
                errorMessage = error.message;
            }

            ctx.status = 200
            ctx.body = {
                code: -1,
                msg: errorMessage || '添加失败',
            }
        }
    }
    /**
     * 增加信息
     * @static
     * @param {Context} ctx
     * @memberof UserController
     */
    public static async addMessage(ctx: Context) {
        const request: any = ctx.request.body
        const channelId: number = ctx.params.channelId
        const schema = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(''),
        })

        try {
            await schema.validateAsync(request)
            await messageModel.create({
                channel: channelId,
                title: request.title,
                content: request.content
            })

            ctx.status = 200
            ctx.body = {
                code: 0,
                msg: '添加成功',
            }
        } catch (error) {
            let errorMessage = ''

            if (error instanceof Error) {
                errorMessage = error.message;
            }

            ctx.status = 200
            ctx.body = {
                code: -1,
                msg: errorMessage || '添加失败',
            }
        }
    }
    /**
     * 增加主题
     * @static
     * @param {Context} ctx
     * @memberof UserController
     */
    public static async addChannel(ctx: Context) {
        const request: any = ctx.request.body
        const schema = Joi.object({
            name: Joi.string().required(),
        })

        try {
            console.log(request)
            await schema.validateAsync(request)
            await channelModel.create({
                name: request.name
            })
    
            ctx.status = 200
            ctx.body = {
                code: 0,
                msg: '添加成功',
            }
        } catch (error) {
            let errorMessage = ''

            if (error instanceof Error) {
                errorMessage = error.message;
            }

            ctx.status = 200
            ctx.body = {
                code: -1,
                msg: errorMessage || '添加失败',
            }
        }
       
    }
}