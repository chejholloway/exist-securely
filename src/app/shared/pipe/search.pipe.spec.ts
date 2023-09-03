import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let searchPipe: SearchPipe;
  const testValue: any[] = [
    {
      id: 20232318,
      title: 'Support for right-to-repair laws slowly grows',
      points: 329,
      user: 'headalgorithm',
      time: 1561034958,
      time_ago: '5 hours ago',
      comments_count: 104,
      type: 'link',
      url:
        'https://arstechnica.com/gadgets/2019/06/hackers-farmers-and-doctors-unite-support-for-right-to-repair-laws-slowly-grows/',
      domain: 'arstechnica.com'
    },
    {
      id: 20233649,
      title: 'Everybody Be Cool, This Is a Robbery',
      points: 55,
      user: 'hsnewman',
      time: 1561043258,
      time_ago: '3 hours ago',
      comments_count: 12,
      type: 'link',
      url: `
          https://www.blackhat.com/us-19/briefings/schedule/
          ?hootPostID=db681a52c6a321681e1f9281b5124457#everybody
          -be-cool-this-is-a-robbery-16233
        `,
      domain: 'blackhat.com'
    },
    {
      id: 20231254,
      title: 'Sony launches a taxi-hailing app in Tokyo',
      points: 158,
      user: 'imjennifer',
      time: 1561023705,
      time_ago: '8 hours ago',
      comments_count: 75,
      type: 'link',
      url: 'https://techcrunch.com/2019/04/22/sony-taxi-tokyo-japan/',
      domain: 'techcrunch.com'
    }
  ];
  const testKeys = 'title,url,user';

  it('should create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    searchPipe = new SearchPipe();
  });

  describe('default behavior for SearchPipe', () => {
    it('should take a value, keys, and TITLE and return object(s) that match the term', () => {
      const testTerm = 'Sony';
      const transformedString = searchPipe.transform(testValue, testKeys, testTerm);
      const expectedResult = [
        {
          id: 20231254,
          title: 'Sony launches a taxi-hailing app in Tokyo',
          points: 158,
          user: 'imjennifer',
          time: 1561023705,
          time_ago: '8 hours ago',
          comments_count: 75,
          type: 'link',
          url: 'https://techcrunch.com/2019/04/22/sony-taxi-tokyo-japan/',
          domain: 'techcrunch.com'
        }
      ];

      expect(transformedString).toEqual(expectedResult);
    });

    it('should take a value, keys, and USER and return object(s) that match the term', () => {
      const testTerm = 'hsnewman';
      const transformedString = searchPipe.transform(testValue, testKeys, testTerm);
      const expectedResult = [
        {
          id: 20233649,
          title: 'Everybody Be Cool, This Is a Robbery',
          points: 55,
          user: 'hsnewman',
          time: 1561043258,
          time_ago: '3 hours ago',
          comments_count: 12,
          type: 'link',
          url: `
          https://www.blackhat.com/us-19/briefings/schedule/
          ?hootPostID=db681a52c6a321681e1f9281b5124457#everybody
          -be-cool-this-is-a-robbery-16233
        `,
          domain: 'blackhat.com'
        }
      ];

      expect(transformedString).toEqual(expectedResult);
    });

    it('should take a value, keys, and URL and return object(s) that match the term', () => {
      const testTerm = 'arstechnica';
      const transformedString = searchPipe.transform(testValue, testKeys, testTerm);
      const expectedResult = [
        {
          id: 20232318,
          title: 'Support for right-to-repair laws slowly grows',
          points: 329,
          user: 'headalgorithm',
          time: 1561034958,
          time_ago: '5 hours ago',
          comments_count: 104,
          type: 'link',
          url:
            'https://arstechnica.com/gadgets/2019/06/hackers-farmers-and-doctors-unite-support-for-right-to-repair-laws-slowly-grows/',
          domain: 'arstechnica.com'
        }
      ];

      expect(transformedString).toEqual(expectedResult);
    });

    it('should return the entire object when no term is provided', () => {
      const testTerm = '';
      const transformedString = searchPipe.transform(testValue, testKeys, testTerm);
      const expectedResult = [
        {
          id: 20232318,
          title: 'Support for right-to-repair laws slowly grows',
          points: 329,
          user: 'headalgorithm',
          time: 1561034958,
          time_ago: '5 hours ago',
          comments_count: 104,
          type: 'link',
          url:
            'https://arstechnica.com/gadgets/2019/06/hackers-farmers-and-doctors-unite-support-for-right-to-repair-laws-slowly-grows/',
          domain: 'arstechnica.com'
        },
        {
          id: 20233649,
          title: 'Everybody Be Cool, This Is a Robbery',
          points: 55,
          user: 'hsnewman',
          time: 1561043258,
          time_ago: '3 hours ago',
          comments_count: 12,
          type: 'link',
          url: `
          https://www.blackhat.com/us-19/briefings/schedule/
          ?hootPostID=db681a52c6a321681e1f9281b5124457#everybody
          -be-cool-this-is-a-robbery-16233
        `,
          domain: 'blackhat.com'
        },
        {
          id: 20231254,
          title: 'Sony launches a taxi-hailing app in Tokyo',
          points: 158,
          user: 'imjennifer',
          time: 1561023705,
          time_ago: '8 hours ago',
          comments_count: 75,
          type: 'link',
          url: 'https://techcrunch.com/2019/04/22/sony-taxi-tokyo-japan/',
          domain: 'techcrunch.com'
        }
      ];
      expect(transformedString).toEqual(expectedResult);
    });

    it('should return an empty object when a non-word/gibberish is the term', () => {
      const testTerm = 'asdfhuy';
      const transformedString = searchPipe.transform(testValue, testKeys, testTerm);
      const expectedResult: never[] = [];
      expect(transformedString).toEqual(expectedResult);
    });
  });

  afterEach(() => {
    searchPipe = new SearchPipe();
  });
});
