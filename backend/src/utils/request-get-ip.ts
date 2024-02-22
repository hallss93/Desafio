/**
 * It returns the IP address of the client making the request
 * @param {any} request - The request object from the client.
 * @returns The IP address of the user.
 */
export const RequestGetIp = (request: any) => {
  let ip: any =
    request.headers['x-forwarded-for'] ||
    request.connection.remoteAddress ||
    request.socket.remoteAddress;
  ip = ip.split(',')[0];
  ip = ip.split(':').slice(-1); //in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
  return ip;
};
