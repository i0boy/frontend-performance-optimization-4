import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { hideModal } from '../redux/imageModal';
import Modal from './Modal';

function ImageModal({ modalVisible, src, alt, bgColor }) {
  const dispatch = useDispatch();
  /*
   * ImageModal 컴포넌트는 섬네일 이미지를 가져올 수 없음
   * PhotoItem 컴포넌트에서 배경색을 계산하도록 수정함
   */
  // const onLoadImage = e => {
  //   const averageColor = getAverageColorOfImage(e.target);
  //   dispatch(setBgColor(averageColor));
  // };

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <Modal modalVisible={modalVisible} closeModal={closeModal} bgColor={bgColor}>
      <ImageWrap>
        <FullImage crossOrigin="*" src={src} alt={alt} />
      </ImageWrap>
    </Modal>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const FullImage = styled.img`
  max-width: 100vw;
  max-height: 75vh;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
`;

export default ImageModal;
