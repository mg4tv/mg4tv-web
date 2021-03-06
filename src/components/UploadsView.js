import * as _ from 'lodash'
import {ProgressIndicator} from 'office-ui-fabric-react'
import React from 'react'


export const UploadsView = ({videoUploader}) => (
  <div>
    {Object.keys(videoUploader.uploads).map((uploadId) => (
      <ProgressIndicator
        key={uploadId}
        label='Video Upload'
        description={`${_.get(videoUploader.uploads, `${uploadId}.storageTaskSnapshot.bytesTransferred`, 0)} / ${_.get(
          videoUploader.uploads,
          `${uploadId}.storageTaskSnapshot.totalBytes`,
          1
        )} bytes uploaded.`}
        percentComplete={
          _.get(videoUploader.uploads, `${uploadId}.storageTaskSnapshot.bytesTransferred`, 0) /
          _.get(videoUploader.uploads, `${uploadId}.storageTaskSnapshot.totalBytes`, 1)
        }
      />
    ))}
  </div>
)

export default UploadsView
