import * as _ from 'lodash'
import * as React from 'react'
import {compose} from 'recompose'
import {withLoading, withNotFound} from '../hocs'
import LoadingView from '../LoadingView'
import NotFoundView from '../NotFoundView'


const enhance = compose(
  withLoading(
    ({videoId, videos}) => !(_.has(videos, videoId)),
    LoadingView
  ),
  withNotFound(
    ({videoId, videos}) => (_.isNull(_.get(videos, videoId, null))),
    NotFoundView
  )
)


const VideoView = (
  {
    videoId,
    videos,
  }
) => (
  <div>
    <LoadingView/>
  </div>
)

export default enhance(VideoView)
