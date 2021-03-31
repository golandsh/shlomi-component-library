import { shallowMount } from '@vue/test-utils'
import { GiTextField } from '@/lib-components/index.js';

describe('GiTextField', () => {
    it('should not show an error validation when valid is false',() => {
        const wrapper = shallowMount(GiTextField, {label: 'Label'});
        wrapper.setData({valid: true})

        expect(wrapper.find('.error').exists()).toBe(false);
    });
});
