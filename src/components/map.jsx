import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'react-google-map'
import GoogleMapLoader from 'react-google-maps-loader'
import styled from 'styled-components'

const API_KEY = 'AIzaSyAy1ZxU6dsMamVA1EWtdkwTs8_lnuz4-50'

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
}

function Map ({ className, lat, long, zoom, title }) {
  return (
    <Container className={className}>
      <GoogleMapLoader
        params={{
          libraries: 'places',
          key: API_KEY
        }}
        render={(googleMaps, error) => {
          return (
            googleMaps && (
              <GoogleMap
                googleMaps={googleMaps}
                center={{ lat, lng: long }}
                zoom={zoom}
                zoomControl={false}
                mapTypeControl={false}
                scaleControl={false}
                streetViewControl={false}
                rotateControl={false}
                fullscreenControl={false}
                coordinates={[
                  {
                    title: title,
                    position: {
                      lat: lat,
                      lng: long
                    }
                  }
                ]}
              />
            )
          )
        }}
      />
    </Container>
  )
}

export default Map

const Container = styled.div`
  height: 400px;
`
