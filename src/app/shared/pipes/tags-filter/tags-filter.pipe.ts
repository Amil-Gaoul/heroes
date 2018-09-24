import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tagsFilter',
    pure: false
})
export class TagsFilterPipe implements PipeTransform {

    transform(items: any[], tagsIds: number[], value: string): any {
        let res = [];
        if (!items && !items.length) {
            return '';
        }
        if (!tagsIds && !tagsIds.length) {
            return items;
        }
        res = items.filter(item => {
            let flag = 0;
            for (let i = 0; i < item[value].length; i++) {
                for (let j = 0; j < tagsIds.length; j++) {
                    if (item[value][i] && item[value][i] === tagsIds[j]) {
                        flag++;
                    }
                }
            }
            return flag === tagsIds.length;
        });
        if (res.length) {
            return res;
        }
        return items;
    }

}
