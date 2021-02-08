import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IsMe from './IsMe'
import IsOther from './IsOther'

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />
  } 
  return <IsOther text={text} date={date} photo={photo} />
}

export default ChatItem