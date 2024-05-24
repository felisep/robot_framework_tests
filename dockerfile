FROM grafana/k6

COPY loadTest.js /loadTest.js

ENTRYPOINT ["k6", "run", "/loadTest.js"]

