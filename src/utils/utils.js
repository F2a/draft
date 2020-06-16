export default {
    isObject(value) {
        const type = typeof value;
        return value != null && (type === 'object' || type === 'function');
    },
    // 防抖
   debounce(func, wait, options) {
        // 通过闭包保存一些变量
        let lastArgs, // 上一次执行 debounced 的 arguments， 起一个标记位的作用，用于 trailingEdge 方法中，invokeFunc 后清空
            lastThis, // 保存上一次 this
            maxWait, // 最大等待时间，数据来源于 options，实现节流效果，保证大于一定时间后一定能执行
            result, // 函数 func 执行后的返回值，多次触发但未满足执行 func 条件时，返回 result
            timerId, // setTimeout 生成的定时器句柄
            lastCallTime; // 上一次调用 debounce 的时间

        let lastInvokeTime = 0; // 上一次执行 func 的时间，配合 maxWait 多用于节流相关
        let leading = false; // 是否响应事件刚开始的那次回调，即第一次触发，false 时忽略
        let maxing = false; // 是否有最大等待时间，配合 maxWait 多用于节流相关
        let trailing = true; // 是否响应事件结束后的那次回调，即最后一次触发，false 时忽略

        // 没传 wait 时调用 window.requestAnimationFrame()
        // window.requestAnimationFrame() 告诉浏览器希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画，差不多 16ms 执行一次
        const useRAF = (!wait && wait !== 0 && typeof window.requestAnimationFrame === 'function');

        // 保证输入的 func 是函数，否则报错
        if (typeof func !== 'function') {
            throw new TypeError('Expected a function');
        }

        // 转成 Number 类型
        wait = +wait || 0;

        // 获取用户传入的配置 options
        if (this.isObject(options)) {
            leading = !!options.leading;
            // options 中是否有 maxWait 属性，节流函数预留
            maxing = 'maxWait' in options;
            // maxWait 为设置的 maxWait 和 wait 中最大的，如果 maxWait 小于 wait，那 maxWait 就没有意义了
            maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }

        // 判断此时是否应该执行 func 函数
        function shouldInvoke(time) {
            // 当前时间距离上一次调用 debounce 的时间差
            const timeSinceLastCall = time - lastCallTime;
            // 当前时间距离上一次执行 func 的时间差
            const timeSinceLastInvoke = time - lastInvokeTime;

            // 上述 4 种情况返回 true
            return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
                (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }

        // ----------- 开闭定时器 -----------
        // 开启定时器
        function startTimer(pendingFunc, wait) {
            // 没传 wait 时调用 window.requestAnimationFrame()
            if (useRAF) {
                // 若想在浏览器下次重绘之前继续更新下一帧动画
                // 那么回调函数自身必须再次调用 window.requestAnimationFrame()
                window.cancelAnimationFrame(timerId);
                return window.requestAnimationFrame(pendingFunc);
            }
            // 不使用 RAF 时开启定时器
            return setTimeout(pendingFunc, wait);
        }

        // 取消定时器
        function cancelTimer(id) {
            if (useRAF) {
                return window.cancelAnimationFrame(id);
            }
            clearTimeout(id);
        }

        // 执行 func 函数
        function invokeFunc(time) {
            // 获取上一次执行 debounced 的参数
            const args = lastArgs;
            // 获取上一次的 this
            const thisArg = lastThis;

            // 重置
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
        }

        // 执行连续事件结束后的那次回调
        function trailingEdge(time) {
            // 清空定时器
            timerId = undefined;

            // trailing 和 lastArgs 两者同时存在时执行
            // trailing 来源自 'trailing' in options ? !!options.trailing : trailing
            // lastArgs 标记位的作用，意味着 debounce 至少执行过一次
            if (trailing && lastArgs) {
                return invokeFunc(time);
            }
            // 清空参数
            lastArgs = lastThis = undefined;
            return result;
        }

        // 计算仍需等待的时间
        function remainingWait(time) {
            // 当前时间距离上一次调用 debounce 的时间差
            const timeSinceLastCall = time - lastCallTime;
            // 当前时间距离上一次执行 func 的时间差
            const timeSinceLastInvoke = time - lastInvokeTime;
            // 剩余等待时间
            const timeWaiting = wait - timeSinceLastCall;

            // 是否设置了最大等待时间
            // 是（节流）：返回「剩余等待时间」和「距上次执行 func 的剩余等待时间」中的最小值
            // 否：返回剩余等待时间
            return maxing
                ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
                : timeWaiting;
        }

        // 定时器回调函数，表示定时结束后的操作
        function timerExpired() {
            const time = Date.now();
            // 1、是否需要执行
            // 执行事件结束后的那次回调，否则重启定时器
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            // 2、否则 计算剩余等待时间，重启定时器，保证下一次时延的末尾触发
            timerId = startTimer(timerExpired, remainingWait(time));
        }

        // ----------- 执行传入函数 -----------
        // 执行连续事件刚开始的那次回调
        function leadingEdge(time) {
            // 1、设置上一次执行 func 的时间
            lastInvokeTime = time;
            // 2、开启定时器，为了事件结束后的那次回调
            timerId = startTimer(timerExpired, wait);
            // 3、如果配置了 leading 执行传入函数 func
            // leading 来源自 !!options.leading
            return leading ? invokeFunc(time) : result;
        }

        // ----------- 对外 3 个方法 -----------
        // 取消函数延迟执行
        function cancel() {
            // 清除定时器
            if (timerId !== undefined) {
                cancelTimer(timerId);
            }
            // 清除闭包变量
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
        }

        // 立即执行 func
        function flush() {
            return timerId === undefined ? result : trailingEdge(Date.now());
        }

        // 检查当前是否在计时中
        function pending() {
            return timerId !== undefined;
        }

        // ----------- 入口函数 -----------
        function debounced(...args) {
            // 获取当前时间
            const time = Date.now();
            // 判断此时是否应该执行 func 函数
            const isInvoking = shouldInvoke(time);

            // 赋值给闭包，用于其他函数调用
            lastArgs = args;
            lastThis = this;
            lastCallTime = time;

            // 执行
            if (isInvoking) {
                // 无 timerId 的情况有两种：
                // 1、首次调用
                // 2、trailingEdge 执行过函数
                if (timerId === undefined) {
                    return leadingEdge(lastCallTime);
                }

                // 如果设置了最大等待时间，则立即执行 func
                // 1、开启定时器，到时间后触发 trailingEdge 这个函数。
                // 2、执行 func，并返回结果
                if (maxing) {
                    // 循环定时器中处理调用
                    timerId = startTimer(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                }
            }
            // 一种特殊情况，trailing 设置为 true 时，前一个 wait 的 trailingEdge 已经执行了函数
            // 此时函数被调用时 shouldInvoke 返回 false，所以要开启定时器
            if (timerId === undefined) {
                timerId = startTimer(timerExpired, wait);
            }
            // 不需要执行时，返回结果
            return result;
        }

        // 绑定方法
        debounced.cancel = cancel;
        debounced.flush = flush;
        debounced.pending = pending;

        // 返回入口函数
        return debounced;
    },
    // 节流
    throttle(func, wait, options) {
        // 首尾调用默认为 true
        let leading = true;
        let trailing = true;

        if (typeof func !== 'function') {
           return false;
        }
        // options 是否是对象
        if (this.isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        // maxWait 为 wait 的防抖函数
        return this.debounce(func, wait, {
            leading,
            trailing,
            maxWait: wait,
        });
    }
}