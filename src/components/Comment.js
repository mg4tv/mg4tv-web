import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import database from '../database'
import { updateComment } from '../actions/comments'

const mapStateToProps = ({comments}) => ({
  comments
})

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(`comments/${this.props.commentId}`)
      this.onFirebaseValue = this.databaseRef.on(
        'value',
        (snapshot) => (
          this.props.dispatch(updateComment({
            commentId: this.props.commentId,
            commentSnapshot: snapshot.val()
          }))
        )
      )
    },
    componentWillUnmount() {
      this.databaseRef.off('value', this.props.onFirebaseValue)
    },
  }),
)

const Comment = ({ commentId, comments }) => (
  <div>
    {JSON.stringify(comments)}
  </div>
)

export default enhance(Comment)