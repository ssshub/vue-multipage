import {HOST} from 'common/js/config'
import Request from 'common/js/request'

var api = HOST + ''




export function getList () {
  const url = api + ``
  return Request.get(url)
}
