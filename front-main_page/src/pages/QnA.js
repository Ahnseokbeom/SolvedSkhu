import React, { useEffect, useState } from 'react'
import './qna.css'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const userCreateStyle = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const QnA = () => {
  // 회원가입 열고 닫기 창
  const [open, setOpen] = useState(false)
  const userHandleOpen = () => setOpen(!open)

  // 유저를 위한 name password
  const [createUserName, setCreateUserName] = useState('')
  const [createUserPassword, setCreateUserPassword] = useState('')

  // 유저 보관함
  const [users, setUser] = useState([])

  // 새 유저를 생성하기 위한 createUser 함수
  const createUser = (props) => {
    try {
      // 유저 정보 body에 저장
      const body = {
        name: props.createUserName,
        password: props.createUserPassword,
      }
      // 유저가 1명 이상일때만
      if (users.length > 0) {
        // 유저의 아이디와 생성할 아이디가 같으면
        for (let i = 0; i < users.length; i++) {
          if (users[i].name === props.createUserName) {
            // 오류 메세지 출력
            return alert('현재 사용 중인 사용자가 있습니다.')
          }
        }
      }

      // 유저 보관함에 추가
      setUser([...users, body])
      setOpen(!open)
      return alert('어서오세요')
    } catch (error) {
      alert('실패하였습니다.')
      console.error(error)
    }
  }

  // 댓글 추가에 필요한 name password content
  const [commentAddName, setCommentAddName] = useState('')
  const [commentAddPassword, setCommentAddPassword] = useState('')
  const [commentAddContent, setCommentAddContent] = useState('')

  // 댓글 보관함
  const [comments, setComments] = useState([])

  // 컨텐츠를 댓글에 보관하기 위한 add 함수
  const add = (props) => {
    try {
      // 먼저 댓글 받은 유저의 정보와 쓴 댓글 내용을 body에 저장
      const body = {
        addName: props.commentAddName,
        addPasseword: props.commentAddPassword,
        addContent: props.commentAddContent,
      }

      // 유저가 하나도 없으면
      if (users.length === 0) return alert('없는 사용자 입니다.')

      // 유저를 찾기 위한 반목문 실행
      for (let i = 0; i < users.length; i++) {
        // user의 이름과 입력받은 이름이 같으면
        if (users[i].name === props.commentAddName) {
          // 만약 비밀번호만 다르다면
          if (users[i].password !== props.commentAddPassword)
            // 오류 출력
            return alert('비밀번호가 같지 않습니다.')
          // 댓글 보관함에 저장
          setComments([...comments, body])
          return
        }
      }

      // 오류 메세지 출력
      return alert('사용자가 없습니다.')
    } catch (error) {
      alert('실패하였습니다.')
      console.error(error)
    }
  }

  // 댓글보관함이 수정 될 때 마다 리로딩
  useEffect(() => {
    console.log('users: ' + users.length)
    console.log('comments: ' + comments.length)
  }, [comments, users])

  return (
    <div className="comments">
      <div>
        <div>
          <button className="comment_button" onClick={userHandleOpen}>
            회원가입
          </button>
          <Modal open={open} onClose={userHandleOpen}>
            <Box sx={userCreateStyle}>
              <input
                onChange={(e) => setCreateUserName(e.target.value)}
                placeholder="Name"
                type="text"
                value={createUserName}
              />
              <input
                onChange={(e) => setCreateUserPassword(e.target.value)}
                placeholder="password"
                type="password"
                value={createUserPassword}
              />

              <button
                disabled={!createUserName || !createUserPassword}
                name="commenting"
                value="Signup"
                onClick={() => {
                  createUser({ createUserName, createUserPassword })
                  // createUserName과 createUserPassword 빈칸으로 만들기
                  setCreateUserName('')
                  setCreateUserPassword('')
                }}
              >
                Signup
              </button>
            </Box>
          </Modal>
        </div>
      </div>

      <div className="comments_input">
        <div>
          <input
            onChange={(e) => setCommentAddName(e.target.value)}
            placeholder="Name"
            type="text"
            value={commentAddName}
          />
          <input
            onChange={(e) => setCommentAddPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={commentAddPassword}
          />
          <textarea
            className="comment_input_area"
            id="textarea"
            onChange={(e) => setCommentAddContent(e.target.value)}
            placeholder="content"
            value={commentAddContent}
          />

          <button
            className="comment_button"
            // disabled={
            //   !commentAddContent || !commentAddPassword || !commentAddName
            // }
            name="commenting"
            value="댓글 작성"
            onClick={() => {
              add({
                commentAddName,
                commentAddContent,
                commentAddPassword,
              })
              setCommentAddName('')
              setCommentAddPassword('')
              setCommentAddContent('')
            }}
          >
            댓글 작성
          </button>
          {/* <span>{props.error}</span> */}
        </div>
      </div>

      {comments.map((comment, index) => (
        <div key={index} className="comments_print">
          <div className="comments_print_user">name = {comment.addName}</div>
          {/* 댓글 내용 */}
          <div className="comments_print_content">{comment.addContent}</div>
        </div>
      ))}
    </div>
  )
}

export default QnA
