const { rejects, deepStrictEqual } = require('assert')

const { error } = require('../src/constants')
const File = require('../src/file')

  ;
(async () => {
  {
    const filePath = '../mocks/empty-file.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)

    const result = File.csvToJson(filePath);

    await rejects(result, rejection)
  }
  {
    const filePath = '../mocks/four-items-file.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)

    const result = File.csvToJson(filePath);

    await rejects(result, rejection)
  }
  {
    const filePath = '../mocks/invalid-header-file.csv'
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)

    const result = File.csvToJson(filePath);

    await rejects(result, rejection)
  }
  {
    const filePath = '../mocks/three-items-file.csv'
    const expected = [
      {
        "id": 1,
        "name": "Vinicius Freire",
        "profession": "JavaScript Developer",
        "birthDay": 2000
      },
      {
        "id": 2,
        "name": "Erick Wendel",
        "profession": "JavaScript Expert",
        "birthDay": 1997
      },
      {
        "id": 3,
        "name": "Mayk Brito",
        "profession": "JavaScript Instructor",
        "birthDay": 1994
      }
    ]

    const result = await File.csvToJson(filePath);

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()