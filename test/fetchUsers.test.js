import { expect } from ('chai');
import sinon from('sinon');
import fetch from ('node-fetch');
import { fetchUsers } from ('../fetchUsers.js');

global.fetch = fetch;

describe('fetchUsers', () => {
    let clock;
    beforeEach(() => {
        clock = sinon.useFakeTimers();
    });
    afterEach(() => {
        clock.restore();
    });

    it('Имитация ответа от API', async () => {
        const mockResponse = [
            { name: 'Leanne Graham' },
            { name: 'Ervin Howell' },
            { name: 'Clementine Bauch' }
        ];

        clock.returns(Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
        }));

        await fetchUsers();

        expect(consoleLogStub.calledWith('Leanne Graham')).to.be.true;
        expect(consoleLogStub.calledWith('Ervin Howell')).to.be.true;
        expect(consoleLogStub.calledWith('Clementine Bauch')).to.be.true;
    });

});
