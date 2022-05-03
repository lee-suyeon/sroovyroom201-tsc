import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Bell } from 'react-feather';

import styled from '@emotion/styled'

const DoorFrame = styled.div`
  background: ${({ theme }) => theme.color.baseColor };
  border: 1.2rem solid ${({ theme }) => theme.color.mainColor };
  border-bottom: none;
  width: 100vw;
  height: 100vh;
`

const Door = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.mainColor};
  color: ${({ theme }) => theme.color.white };
  padding-top: 9rem;
  border: 1.5px solid ${({ theme }) => theme.color.baseColor};
  border-bottom: 0;
  transform-origin: 0% 0%;
  transform: perspective(300px) rotate(0deg);
  z-index: 10;
`

const Home: NextPage = () => {

  const onClickDoorBell = () => {

  }

  return (
    <>
      <Head>
        <title>SROOVYROOM201💚</title>
      </Head>
      <DoorFrame>
        <Door>
          <div className="room">201</div>
          <div className="bell">
            <Bell onClick={onClickDoorBell}/>
          </div>
        </Door>
      </DoorFrame>
    </>
    
    // <DoorFrame>
    //   <Door active={open} >
    //     <div className="room">201</div>
    //     <div className="bell">
    //       <Bell onClick={onClickDoorBell}/>
    //     </div>
    //     <span>초인종을 눌러주세요!</span>
    //     <Handle />
    //   </Door>
    //     <Cat>
    //       <div>
    //         어..왔냥?
    //       </div>
    //       <img src="https://pngimg.com/uploads/cat/cat_PNG50509.png" alt="cat" />
    //     </Cat>
    //   {
    //     ringTheBell && 
    //     <Modal
    //       toggleModal={onClickDoorBell}
    //       openTheDoor={openTheDoor}
    //     />
    //   }
    // </DoorFrame>
  )
}

export default Home
