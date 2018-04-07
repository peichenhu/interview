# 选择排序
选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

## 算法步骤
1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

## JavaScript 代码实现

```javascript
function selectionSort(arr,foo) {
    // [1] 当只有一个值，不循环, j 记录找到了多少个较小值
    for(var j = 0; j < arr.length-1; j++){
        // 每循环一次找到一个较小值并放在第一位，下一次循环从下一位开始比较
        for (var i = j; i < arr.length; i++) {
            // 第一个值 和 所有的值 作比较，
            if(arr[j] > arr[i]){
                // 较小的移到最前面
                foo = arr[j]
                arr[j] = arr[i];
                arr[i] = foo; 
                console.log(foo)
            }
        }
    }
    return arr;
}

```

## JavaScript 代码实现

## JavaScript 代码实现