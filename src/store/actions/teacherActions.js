export const resetError = () => {
  return (dispatch, getState) => {
    dispatch({type: 'RESET_ERROR'})
  }
}

export const startUpload = () => {
  return (dispatch, getState) => {
    dispatch({type: 'START_UPLOAD'})
  }
}

export const loadTeacherData = (teacherID) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    let teachersDocument = firestore.collection('teacher').doc(teacherID)

    teachersDocument.get()
      .then((doc) => {
        if (doc.data() !== undefined) {
          dispatch({type: 'LOAD_TEACHER_DATA_SUCCESS', payload: {teacher: {...doc.data(), teacherID}}})
        } else {
          dispatch({type: 'LOAD_TEACHER_DATA_ERROR', payload: {error: 'page not found'}})
        }
      });
  }
}

export const addComment = (comment) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();

    firebase.functions().httpsCallable('addCommentToQueue')({...comment})
      .then((response) => {
        dispatch({type: 'ADD_COMMENT_SUCCESS'})
      }).catch((error) => {
        dispatch({type: 'ADD_COMMENT_ERROR', payload: {error: error}})
      })
  }
}
