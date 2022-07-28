// todo: 嘗試 sweetalert2 更改樣式
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

