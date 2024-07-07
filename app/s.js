window.originalFetch = window.fetch;

window.fetch = async (...args) => {
  console.log('fetching', JSON.stringify(args));
  const fetchStartTime = Date.now();
  const requestId = String(fetchStartTime + Math.random()); // TODO: Use a better random number generator or uuid

  const response = await window.originalFetch.apply(this, args);  // Apply the original fetch method
  console.log('original response', response);

  const clonedResponse = response.clone();
  if (!clonedResponse.body) {
    return response;
  }

  const reader = clonedResponse.body.getReader();
  const decoder = new TextDecoder();
  let decodedResponse = '';

  while (true) {
    const { value, done } = await reader.read();
    console.log(value);
    if (done) {
      break;
    }
    decodedResponse += decoder.decode(value, { stream: true });

  }

  console.log('decoded response', decodedResponse);

  if (decodedResponse.includes('{"style":{"backgroundColor":"lightblue"}')) {
    console.log('replacing');
    decodedResponse = decodedResponse.replace('{"style":{"backgroundColor":"lightblue"}', '{"style":{"backgroundColor":"lightblue"}, "data-rsc":"debug"');
    console.log('replaced', decodedResponse);

    // Encode the decoded response back to binary format
    const encoder = new TextEncoder();
    const encodedResponse = encoder.encode(decodedResponse);
    console.log('encoded response', encodedResponse, 'returning it');

    // To recreate a Response object with the encoded body, you could do:
    const newResponse = new Response(encodedResponse, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    return newResponse;
  }

  return response;


};
