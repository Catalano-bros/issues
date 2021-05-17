import React from 'react'
import video from '../../assets/connect.mp4'
import styled from 'styled-components'
export const RegVideo = ({ src }) => {
  return (
    <RegVideoWrapper>
      <video controls autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}

export const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          alt={title}
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

const RegVideoWrapper = styled.div`
  width: 80vw;
  max-width: 600px;
  height: 30vh;
  position: relative;
  margin: 0 auto;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const IframeVideoWrapper = styled.div`
  width: 80vw;
  max-width: 600px;
  margin: 0 auto;
  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

Video.defaultProps = {
  src: 'https://www.youtube.com/embed/kNGzTdZJY-Q',
  title: 'Ero io',
}
