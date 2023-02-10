
import channelModel from './channel'
import messageModel from './message'

// messageModel.hasOne(channelModel, { foreignKey: 'channel' })

module.exports = {
    channelModel,
    messageModel,
}