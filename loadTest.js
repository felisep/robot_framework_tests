import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 10 },
  ],
};

export default function () {
  let res = http.get('https://ssports.web.app/signup');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
