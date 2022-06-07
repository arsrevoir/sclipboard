
const postData = async (url, dataArr) => {
  const formData = new FormData()
  dataArr.forEach(el => {
    formData.append(el[0], el[1])
  })

  const data = new URLSearchParams(formData)

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: data
  })

  return response
}

export default postData