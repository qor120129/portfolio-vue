
// import axios from 'axios'
// import { fetchMovieTitle } from "./example"

// describe('비동기 테스트', () => {
//   test('영화 제목 변환', async () => {
//     axios.get = jest.fn(()=>{
//       return new Promise(resolve => {
//         resolve({
//           data: {
//             Title: 'Aladdin'
//           }
//         })
//       })
//     })
//     const title = await fetchMovieTitle()
//     expect(title).toBe('Aladdin')
//   })
// })


// import { mount } from '@vue/test-utils'
// import Example from './Example.vue'

// test('메세지를 변경합니다.', async () => {
//   const wrapper =  mount(Example)
//   expect(wrapper.vm.msg).toBe('hello vue test utils !')
//   await wrapper.setData({
//     msg: 'hello ~'
//   }) 
//   expect(wrapper.vm.msg).toBe('hello ~')
//   expect(wrapper.find('div').text()).toBe('hello ~')
// })


