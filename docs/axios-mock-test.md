---
title: Axios mock test
category: JavaScript
---

```js
import axios from 'axios'

jest.mock(axios)

describe('when request is successful', () => {
	axios.get.mockResolvedValue({
		data: [
			{ id: 1, name: 'Foo' },
		],
		status: 200,
		statusText: 'OK',
		config: {},
		headers: {},
		request: {}
	})
	test('it returns data', async () => {
		const { data } = await getUsers()
		expect(data[0]).toEqual({
			id: 1,
			name: 'Foo'	
		})
	})
})
```
