// import Echo from "laravel-echo";

import axios from "axios";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const handlePusher=1
if(handlePusher===5){
  console.log(Pusher)
}



const authorizer = (channel, options) => {
  return {
    authorize: (socketId, callback) => {
      axios
        .post(
          "https://1ten365.online/api/broadcasting/auth",
          {
            socket_id: socketId,
            channel_name: channel.name,
          },
          {
            headers: {
              Authorization: `Bearer ${window.token}`,
            },
          }
        )
        .then((response) => {
          callback(false, response.data);
        })
        .catch((error) => {
          callback(error);
        });
    },
  };
};

const echo = new Echo({
  broadcaster: "pusher",
  key: "a5f3e5e886908b9c61f0",
  cluster: "us3",
  forceTLS: true,
  authorizer: authorizer,
});

export default echo;
