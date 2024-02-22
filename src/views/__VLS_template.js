import DefaultHeader from '@/layouts/header.vue';
import DefaultFooter from '@/layouts/footer.vue';
import wrapper from '@/layouts/wrapper.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, banner_url, isVisible1, isVisible2, showContent, activeContent } from './articles.vue';

function __VLS_template() {
    let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
    /* Components */
    let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
    let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
    let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
    let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
    /* Style Scoped */
    type __VLS_StyleScopedClasses = {};
    let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents!: {} &
        __VLS_WithComponent<'DefaultHeader', typeof __VLS_localComponents, "DefaultHeader", "DefaultHeader", "DefaultHeader"> &
        __VLS_WithComponent<'wrapper', typeof __VLS_localComponents, "Wrapper", "wrapper", "wrapper"> &
        __VLS_WithComponent<'DefaultFooter', typeof __VLS_localComponents, "DefaultFooter", "DefaultFooter", "DefaultFooter">;
    __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
    __VLS_components.DefaultHeader;
    // @ts-ignore
    [DefaultHeader,];
    __VLS_components.Wrapper; __VLS_components.Wrapper; __VLS_components.wrapper; __VLS_components.wrapper;
    // @ts-ignore
    [wrapper, wrapper,];
    __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article; __VLS_intrinsicElements.article;
    __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4;
    __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.aside; __VLS_intrinsicElements.aside;
    __VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
    __VLS_components.DefaultFooter;
    // @ts-ignore
    [DefaultFooter,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
        let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
        {
            const __VLS_5 = ({} as 'DefaultHeader' extends keyof typeof __VLS_ctx ? { 'DefaultHeader': typeof __VLS_ctx.DefaultHeader; } : typeof __VLS_resolvedLocalAndGlobalComponents).DefaultHeader;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, headerTitleZh: ("專欄文章"), headerTitleEng: ("Articles"), bgi: ((__VLS_ctx.banner_url)), }));
            ({} as { DefaultHeader: typeof __VLS_5; }).DefaultHeader;
            const __VLS_7 = __VLS_6({ ...{}, headerTitleZh: ("專欄文章"), headerTitleEng: ("Articles"), bgi: ((__VLS_ctx.banner_url)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, headerTitleZh: ("專欄文章"), headerTitleEng: ("Articles"), bgi: ((__VLS_ctx.banner_url)), });
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
            let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
        }
        {
            const __VLS_10 = ({} as 'Wrapper' extends keyof typeof __VLS_ctx ? { 'wrapper': typeof __VLS_ctx.Wrapper; } : 'wrapper' extends keyof typeof __VLS_ctx ? { 'wrapper': typeof __VLS_ctx.wrapper; } : typeof __VLS_resolvedLocalAndGlobalComponents).wrapper;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: ("articles"), }));
            ({} as { wrapper: typeof __VLS_10; }).wrapper;
            ({} as { wrapper: typeof __VLS_10; }).wrapper;
            const __VLS_12 = __VLS_11({ ...{}, class: ("articles"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("articles"), });
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
            let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, id: ("wannan_top"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, id: ("wannan_top"), });
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
                let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
                __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.isVisible1));
                {
                    const __VLS_20 = __VLS_intrinsicElements["section"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: ("articles_top"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("articles_top"), });
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
                    let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
                    {
                        const __VLS_25 = __VLS_intrinsicElements["article"];
                        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                        const __VLS_27 = __VLS_26({ ...{}, class: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("left"), });
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
                        let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
                        {
                            const __VLS_30 = __VLS_intrinsicElements["div"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{}, class: ("title title_phone"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("title title_phone"), });
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
                            let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
                            {
                                const __VLS_35 = __VLS_intrinsicElements["h1"];
                                const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                                const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
                                let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
                                (__VLS_38.slots!).default;
                            }
                            (__VLS_33.slots!).default;
                        }
                        {
                            const __VLS_40 = __VLS_intrinsicElements["h2"];
                            const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                            const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
                            let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
                            (__VLS_43.slots!).default;
                        }
                        {
                            const __VLS_45 = __VLS_intrinsicElements["h3"];
                            const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                            const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
                            let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
                            (__VLS_48.slots!).default;
                        }
                        {
                            const __VLS_50 = __VLS_intrinsicElements["h4"];
                            const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                            const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
                            let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
                            (__VLS_53.slots!).default;
                        }
                        {
                            const __VLS_55 = __VLS_intrinsicElements["a"];
                            const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                            const __VLS_57 = __VLS_56({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                            const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
                            let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
                            (__VLS_58.slots!).default;
                        }
                        (__VLS_28.slots!).default;
                    }
                    {
                        const __VLS_60 = __VLS_intrinsicElements["img"];
                        const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
                        const __VLS_62 = __VLS_61({ ...{}, src: ("../img/articles/articles_1.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_1.jpg"), alt: (""), });
                        const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
                        let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
                    }
                    (__VLS_23.slots!).default;
                }
                (__VLS_18.slots!).default;
            }
            {
                const __VLS_65 = __VLS_intrinsicElements["div"];
                const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                const __VLS_67 = __VLS_66({ ...{}, id: ("know_top"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, id: ("know_top"), });
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
                let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
                __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.isVisible2));
                {
                    const __VLS_70 = __VLS_intrinsicElements["section"];
                    const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                    const __VLS_72 = __VLS_71({ ...{}, class: ("articles_top"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("articles_top"), });
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
                    let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
                    {
                        const __VLS_75 = __VLS_intrinsicElements["article"];
                        const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                        const __VLS_77 = __VLS_76({ ...{}, class: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, class: ("left"), });
                        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
                        let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
                        {
                            const __VLS_80 = __VLS_intrinsicElements["div"];
                            const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                            const __VLS_82 = __VLS_81({ ...{}, class: ("title"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("title"), });
                            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
                            let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
                            {
                                const __VLS_85 = __VLS_intrinsicElements["h1"];
                                const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                                const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
                                let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
                                (__VLS_88.slots!).default;
                            }
                            (__VLS_83.slots!).default;
                        }
                        {
                            const __VLS_90 = __VLS_intrinsicElements["h2"];
                            const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                            const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
                            let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
                            (__VLS_93.slots!).default;
                        }
                        {
                            const __VLS_95 = __VLS_intrinsicElements["h3"];
                            const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                            const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
                            let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
                            (__VLS_98.slots!).default;
                        }
                        {
                            const __VLS_100 = __VLS_intrinsicElements["h4"];
                            const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
                            const __VLS_102 = __VLS_101({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
                            let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
                            (__VLS_103.slots!).default;
                        }
                        {
                            const __VLS_105 = __VLS_intrinsicElements["a"];
                            const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                            const __VLS_107 = __VLS_106({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                            const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
                            let __VLS_109!: __VLS_NormalizeEmits<typeof __VLS_108.emit>;
                            (__VLS_108.slots!).default;
                        }
                        (__VLS_78.slots!).default;
                    }
                    {
                        const __VLS_110 = __VLS_intrinsicElements["img"];
                        const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                        const __VLS_112 = __VLS_111({ ...{}, src: ("../img/articles/articles_5.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_5.jpg"), alt: (""), });
                        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
                        let __VLS_114!: __VLS_NormalizeEmits<typeof __VLS_113.emit>;
                    }
                    (__VLS_73.slots!).default;
                }
                (__VLS_68.slots!).default;
            }
            {
                const __VLS_115 = __VLS_intrinsicElements["div"];
                const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
                const __VLS_117 = __VLS_116({ ...{}, id: ("interview_top"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_115, typeof __VLS_117> & Record<string, unknown>) => void)({ ...{}, id: ("interview_top"), });
                const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117)!;
                let __VLS_119!: __VLS_NormalizeEmits<typeof __VLS_118.emit>;
                __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.isVisible3));
                {
                    const __VLS_120 = __VLS_intrinsicElements["section"];
                    const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                    const __VLS_122 = __VLS_121({ ...{}, class: ("articles_top"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_120, typeof __VLS_122> & Record<string, unknown>) => void)({ ...{}, class: ("articles_top"), });
                    const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122)!;
                    let __VLS_124!: __VLS_NormalizeEmits<typeof __VLS_123.emit>;
                    {
                        const __VLS_125 = __VLS_intrinsicElements["article"];
                        const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                        const __VLS_127 = __VLS_126({ ...{}, class: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_125, typeof __VLS_127> & Record<string, unknown>) => void)({ ...{}, class: ("left"), });
                        const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
                        let __VLS_129!: __VLS_NormalizeEmits<typeof __VLS_128.emit>;
                        {
                            const __VLS_130 = __VLS_intrinsicElements["div"];
                            const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
                            const __VLS_132 = __VLS_131({ ...{}, class: ("title"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_130, typeof __VLS_132> & Record<string, unknown>) => void)({ ...{}, class: ("title"), });
                            const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132)!;
                            let __VLS_134!: __VLS_NormalizeEmits<typeof __VLS_133.emit>;
                            {
                                const __VLS_135 = __VLS_intrinsicElements["h1"];
                                const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
                                const __VLS_137 = __VLS_136({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_137> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
                                let __VLS_139!: __VLS_NormalizeEmits<typeof __VLS_138.emit>;
                                (__VLS_138.slots!).default;
                            }
                            (__VLS_133.slots!).default;
                        }
                        {
                            const __VLS_140 = __VLS_intrinsicElements["h2"];
                            const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
                            const __VLS_142 = __VLS_141({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_140, typeof __VLS_142> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142)!;
                            let __VLS_144!: __VLS_NormalizeEmits<typeof __VLS_143.emit>;
                            (__VLS_143.slots!).default;
                        }
                        {
                            const __VLS_145 = __VLS_intrinsicElements["h3"];
                            const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
                            const __VLS_147 = __VLS_146({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
                            let __VLS_149!: __VLS_NormalizeEmits<typeof __VLS_148.emit>;
                            (__VLS_148.slots!).default;
                        }
                        {
                            const __VLS_150 = __VLS_intrinsicElements["h4"];
                            const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
                            const __VLS_152 = __VLS_151({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
                            let __VLS_154!: __VLS_NormalizeEmits<typeof __VLS_153.emit>;
                            (__VLS_153.slots!).default;
                        }
                        {
                            const __VLS_155 = __VLS_intrinsicElements["a"];
                            const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
                            const __VLS_157 = __VLS_156({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_157> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                            const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
                            let __VLS_159!: __VLS_NormalizeEmits<typeof __VLS_158.emit>;
                            (__VLS_158.slots!).default;
                        }
                        (__VLS_128.slots!).default;
                    }
                    {
                        const __VLS_160 = __VLS_intrinsicElements["img"];
                        const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
                        const __VLS_162 = __VLS_161({ ...{}, src: ("../img/articles/articles_9.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_9.jpg"), alt: (""), });
                        const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162)!;
                        let __VLS_164!: __VLS_NormalizeEmits<typeof __VLS_163.emit>;
                    }
                    (__VLS_123.slots!).default;
                }
                (__VLS_118.slots!).default;
            }
            {
                const __VLS_165 = __VLS_intrinsicElements["section"];
                const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
                const __VLS_167 = __VLS_166({ ...{}, class: ("articles_buttom"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{}, class: ("articles_buttom"), });
                const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
                let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
                {
                    const __VLS_170 = __VLS_intrinsicElements["aside"];
                    const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
                    const __VLS_172 = __VLS_171({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_170, typeof __VLS_172> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172)!;
                    let __VLS_174!: __VLS_NormalizeEmits<typeof __VLS_173.emit>;
                    {
                        const __VLS_175 = __VLS_intrinsicElements["h2"];
                        const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
                        const __VLS_177 = __VLS_176({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_176));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_175, typeof __VLS_177> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
                        let __VLS_179!: __VLS_NormalizeEmits<typeof __VLS_178.emit>;
                        (__VLS_178.slots!).default;
                    }
                    {
                        const __VLS_180 = __VLS_intrinsicElements["ul"];
                        const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
                        const __VLS_182 = __VLS_181({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_180, typeof __VLS_182> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182)!;
                        let __VLS_184!: __VLS_NormalizeEmits<typeof __VLS_183.emit>;
                        {
                            const __VLS_185 = __VLS_intrinsicElements["li"];
                            const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
                            const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_185, typeof __VLS_187> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187)!;
                            let __VLS_189!: __VLS_NormalizeEmits<typeof __VLS_188.emit>;
                            {
                                const __VLS_190 = __VLS_intrinsicElements["a"];
                                const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
                                const __VLS_192 = __VLS_191({ ...{ onClick: {} as any, }, href: ("#"), id: ("btn_wanann"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_190, typeof __VLS_192> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("#"), id: ("btn_wanann"), });
                                const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192)!;
                                let __VLS_194!: __VLS_NormalizeEmits<typeof __VLS_193.emit>;
                                let __VLS_195 = { 'click': __VLS_pickEvent(__VLS_194['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_191, typeof __VLS_192>).onClick) };
                                __VLS_195 = {
                                    click: $event => {
                                        __VLS_ctx.showContent('content1');
                                        // @ts-ignore
                                        [banner_url, banner_url, banner_url, isVisible1, isVisible2, isVisible3, showContent,];
                                    }
                                };
                                (__VLS_193.slots!).default;
                            }
                            (__VLS_188.slots!).default;
                        }
                        {
                            const __VLS_196 = __VLS_intrinsicElements["li"];
                            const __VLS_197 = __VLS_elementAsFunctionalComponent(__VLS_196);
                            const __VLS_198 = __VLS_197({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_197));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_196, typeof __VLS_198> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198)!;
                            let __VLS_200!: __VLS_NormalizeEmits<typeof __VLS_199.emit>;
                            {
                                const __VLS_201 = __VLS_intrinsicElements["a"];
                                const __VLS_202 = __VLS_elementAsFunctionalComponent(__VLS_201);
                                const __VLS_203 = __VLS_202({ ...{ onClick: {} as any, }, href: ("#"), id: ("btn_know"), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_201, typeof __VLS_203> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("#"), id: ("btn_know"), });
                                const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203)!;
                                let __VLS_205!: __VLS_NormalizeEmits<typeof __VLS_204.emit>;
                                let __VLS_206 = { 'click': __VLS_pickEvent(__VLS_205['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_202, typeof __VLS_203>).onClick) };
                                __VLS_206 = {
                                    click: $event => {
                                        __VLS_ctx.showContent('content2');
                                        // @ts-ignore
                                        [showContent,];
                                    }
                                };
                                (__VLS_204.slots!).default;
                            }
                            (__VLS_199.slots!).default;
                        }
                        {
                            const __VLS_207 = __VLS_intrinsicElements["li"];
                            const __VLS_208 = __VLS_elementAsFunctionalComponent(__VLS_207);
                            const __VLS_209 = __VLS_208({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_208));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_207, typeof __VLS_209> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_207, __VLS_209)!;
                            let __VLS_211!: __VLS_NormalizeEmits<typeof __VLS_210.emit>;
                            {
                                const __VLS_212 = __VLS_intrinsicElements["a"];
                                const __VLS_213 = __VLS_elementAsFunctionalComponent(__VLS_212);
                                const __VLS_214 = __VLS_213({ ...{ onClick: {} as any, }, href: ("#"), id: ("btn_interview"), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_212, typeof __VLS_214> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("#"), id: ("btn_interview"), });
                                const __VLS_215 = __VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214)!;
                                let __VLS_216!: __VLS_NormalizeEmits<typeof __VLS_215.emit>;
                                let __VLS_217 = { 'click': __VLS_pickEvent(__VLS_216['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_213, typeof __VLS_214>).onClick) };
                                __VLS_217 = {
                                    click: $event => {
                                        __VLS_ctx.showContent('content3');
                                        // @ts-ignore
                                        [showContent,];
                                    }
                                };
                                (__VLS_215.slots!).default;
                            }
                            (__VLS_210.slots!).default;
                        }
                        {
                            const __VLS_218 = __VLS_intrinsicElements["li"];
                            const __VLS_219 = __VLS_elementAsFunctionalComponent(__VLS_218);
                            const __VLS_220 = __VLS_219({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_219));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_218, typeof __VLS_220> & Record<string, unknown>) => void)({ ...{}, });
                            const __VLS_221 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220)!;
                            let __VLS_222!: __VLS_NormalizeEmits<typeof __VLS_221.emit>;
                            {
                                const __VLS_223 = __VLS_intrinsicElements["a"];
                                const __VLS_224 = __VLS_elementAsFunctionalComponent(__VLS_223);
                                const __VLS_225 = __VLS_224({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_224));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_223, typeof __VLS_225> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                const __VLS_226 = __VLS_pickFunctionalComponentCtx(__VLS_223, __VLS_225)!;
                                let __VLS_227!: __VLS_NormalizeEmits<typeof __VLS_226.emit>;
                                (__VLS_226.slots!).default;
                            }
                            (__VLS_221.slots!).default;
                        }
                        (__VLS_183.slots!).default;
                    }
                    (__VLS_173.slots!).default;
                }
                if (__VLS_ctx.activeContent === 'content1') {
                    {
                        const __VLS_228 = __VLS_intrinsicElements["div"];
                        const __VLS_229 = __VLS_elementAsFunctionalComponent(__VLS_228);
                        const __VLS_230 = __VLS_229({ ...{}, class: ("articles_all"), id: ("articles_wanann"), }, ...__VLS_functionalComponentArgsRest(__VLS_229));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_228, typeof __VLS_230> & Record<string, unknown>) => void)({ ...{}, class: ("articles_all"), id: ("articles_wanann"), });
                        const __VLS_231 = __VLS_pickFunctionalComponentCtx(__VLS_228, __VLS_230)!;
                        let __VLS_232!: __VLS_NormalizeEmits<typeof __VLS_231.emit>;
                        {
                            const __VLS_233 = __VLS_intrinsicElements["section"];
                            const __VLS_234 = __VLS_elementAsFunctionalComponent(__VLS_233);
                            const __VLS_235 = __VLS_234({ ...{}, class: ("section_all"), }, ...__VLS_functionalComponentArgsRest(__VLS_234));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_233, typeof __VLS_235> & Record<string, unknown>) => void)({ ...{}, class: ("section_all"), });
                            const __VLS_236 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235)!;
                            let __VLS_237!: __VLS_NormalizeEmits<typeof __VLS_236.emit>;
                            {
                                const __VLS_238 = __VLS_intrinsicElements["img"];
                                const __VLS_239 = __VLS_elementAsFunctionalComponent(__VLS_238);
                                const __VLS_240 = __VLS_239({ ...{}, src: ("../img/articles/articles_2.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_239));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_238, typeof __VLS_240> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_2.jpg"), alt: (""), });
                                const __VLS_241 = __VLS_pickFunctionalComponentCtx(__VLS_238, __VLS_240)!;
                                let __VLS_242!: __VLS_NormalizeEmits<typeof __VLS_241.emit>;
                            }
                            {
                                const __VLS_243 = __VLS_intrinsicElements["article"];
                                const __VLS_244 = __VLS_elementAsFunctionalComponent(__VLS_243);
                                const __VLS_245 = __VLS_244({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_244));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_243, typeof __VLS_245> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_246 = __VLS_pickFunctionalComponentCtx(__VLS_243, __VLS_245)!;
                                let __VLS_247!: __VLS_NormalizeEmits<typeof __VLS_246.emit>;
                                {
                                    const __VLS_248 = __VLS_intrinsicElements["h2"];
                                    const __VLS_249 = __VLS_elementAsFunctionalComponent(__VLS_248);
                                    const __VLS_250 = __VLS_249({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_249));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_248, typeof __VLS_250> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_251 = __VLS_pickFunctionalComponentCtx(__VLS_248, __VLS_250)!;
                                    let __VLS_252!: __VLS_NormalizeEmits<typeof __VLS_251.emit>;
                                    (__VLS_251.slots!).default;
                                }
                                {
                                    const __VLS_253 = __VLS_intrinsicElements["h3"];
                                    const __VLS_254 = __VLS_elementAsFunctionalComponent(__VLS_253);
                                    const __VLS_255 = __VLS_254({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_254));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_253, typeof __VLS_255> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_256 = __VLS_pickFunctionalComponentCtx(__VLS_253, __VLS_255)!;
                                    let __VLS_257!: __VLS_NormalizeEmits<typeof __VLS_256.emit>;
                                    (__VLS_256.slots!).default;
                                }
                                {
                                    const __VLS_258 = __VLS_intrinsicElements["p"];
                                    const __VLS_259 = __VLS_elementAsFunctionalComponent(__VLS_258);
                                    const __VLS_260 = __VLS_259({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_259));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_258, typeof __VLS_260> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_261 = __VLS_pickFunctionalComponentCtx(__VLS_258, __VLS_260)!;
                                    let __VLS_262!: __VLS_NormalizeEmits<typeof __VLS_261.emit>;
                                    (__VLS_261.slots!).default;
                                }
                                {
                                    const __VLS_263 = __VLS_intrinsicElements["a"];
                                    const __VLS_264 = __VLS_elementAsFunctionalComponent(__VLS_263);
                                    const __VLS_265 = __VLS_264({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_264));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_263, typeof __VLS_265> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_266 = __VLS_pickFunctionalComponentCtx(__VLS_263, __VLS_265)!;
                                    let __VLS_267!: __VLS_NormalizeEmits<typeof __VLS_266.emit>;
                                    (__VLS_266.slots!).default;
                                }
                                (__VLS_246.slots!).default;
                            }
                            (__VLS_236.slots!).default;
                        }
                        {
                            const __VLS_268 = __VLS_intrinsicElements["section"];
                            const __VLS_269 = __VLS_elementAsFunctionalComponent(__VLS_268);
                            const __VLS_270 = __VLS_269({ ...{}, class: ("section_all even"), }, ...__VLS_functionalComponentArgsRest(__VLS_269));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_268, typeof __VLS_270> & Record<string, unknown>) => void)({ ...{}, class: ("section_all even"), });
                            const __VLS_271 = __VLS_pickFunctionalComponentCtx(__VLS_268, __VLS_270)!;
                            let __VLS_272!: __VLS_NormalizeEmits<typeof __VLS_271.emit>;
                            {
                                const __VLS_273 = __VLS_intrinsicElements["img"];
                                const __VLS_274 = __VLS_elementAsFunctionalComponent(__VLS_273);
                                const __VLS_275 = __VLS_274({ ...{}, src: ("../img/articles/articles_3.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_274));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_273, typeof __VLS_275> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_3.jpg"), alt: (""), });
                                const __VLS_276 = __VLS_pickFunctionalComponentCtx(__VLS_273, __VLS_275)!;
                                let __VLS_277!: __VLS_NormalizeEmits<typeof __VLS_276.emit>;
                            }
                            {
                                const __VLS_278 = __VLS_intrinsicElements["article"];
                                const __VLS_279 = __VLS_elementAsFunctionalComponent(__VLS_278);
                                const __VLS_280 = __VLS_279({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_279));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_278, typeof __VLS_280> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_281 = __VLS_pickFunctionalComponentCtx(__VLS_278, __VLS_280)!;
                                let __VLS_282!: __VLS_NormalizeEmits<typeof __VLS_281.emit>;
                                {
                                    const __VLS_283 = __VLS_intrinsicElements["h2"];
                                    const __VLS_284 = __VLS_elementAsFunctionalComponent(__VLS_283);
                                    const __VLS_285 = __VLS_284({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_284));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_283, typeof __VLS_285> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_286 = __VLS_pickFunctionalComponentCtx(__VLS_283, __VLS_285)!;
                                    let __VLS_287!: __VLS_NormalizeEmits<typeof __VLS_286.emit>;
                                    (__VLS_286.slots!).default;
                                }
                                {
                                    const __VLS_288 = __VLS_intrinsicElements["h3"];
                                    const __VLS_289 = __VLS_elementAsFunctionalComponent(__VLS_288);
                                    const __VLS_290 = __VLS_289({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_289));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_288, typeof __VLS_290> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_291 = __VLS_pickFunctionalComponentCtx(__VLS_288, __VLS_290)!;
                                    let __VLS_292!: __VLS_NormalizeEmits<typeof __VLS_291.emit>;
                                    (__VLS_291.slots!).default;
                                }
                                {
                                    const __VLS_293 = __VLS_intrinsicElements["p"];
                                    const __VLS_294 = __VLS_elementAsFunctionalComponent(__VLS_293);
                                    const __VLS_295 = __VLS_294({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_294));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_293, typeof __VLS_295> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_296 = __VLS_pickFunctionalComponentCtx(__VLS_293, __VLS_295)!;
                                    let __VLS_297!: __VLS_NormalizeEmits<typeof __VLS_296.emit>;
                                    (__VLS_296.slots!).default;
                                }
                                {
                                    const __VLS_298 = __VLS_intrinsicElements["a"];
                                    const __VLS_299 = __VLS_elementAsFunctionalComponent(__VLS_298);
                                    const __VLS_300 = __VLS_299({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_299));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_298, typeof __VLS_300> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_301 = __VLS_pickFunctionalComponentCtx(__VLS_298, __VLS_300)!;
                                    let __VLS_302!: __VLS_NormalizeEmits<typeof __VLS_301.emit>;
                                    (__VLS_301.slots!).default;
                                }
                                (__VLS_281.slots!).default;
                            }
                            (__VLS_271.slots!).default;
                        }
                        {
                            const __VLS_303 = __VLS_intrinsicElements["section"];
                            const __VLS_304 = __VLS_elementAsFunctionalComponent(__VLS_303);
                            const __VLS_305 = __VLS_304({ ...{}, class: ("section_all"), }, ...__VLS_functionalComponentArgsRest(__VLS_304));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_303, typeof __VLS_305> & Record<string, unknown>) => void)({ ...{}, class: ("section_all"), });
                            const __VLS_306 = __VLS_pickFunctionalComponentCtx(__VLS_303, __VLS_305)!;
                            let __VLS_307!: __VLS_NormalizeEmits<typeof __VLS_306.emit>;
                            {
                                const __VLS_308 = __VLS_intrinsicElements["img"];
                                const __VLS_309 = __VLS_elementAsFunctionalComponent(__VLS_308);
                                const __VLS_310 = __VLS_309({ ...{}, src: ("../img/articles/articles_4.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_308, typeof __VLS_310> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_4.jpg"), alt: (""), });
                                const __VLS_311 = __VLS_pickFunctionalComponentCtx(__VLS_308, __VLS_310)!;
                                let __VLS_312!: __VLS_NormalizeEmits<typeof __VLS_311.emit>;
                            }
                            {
                                const __VLS_313 = __VLS_intrinsicElements["article"];
                                const __VLS_314 = __VLS_elementAsFunctionalComponent(__VLS_313);
                                const __VLS_315 = __VLS_314({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_314));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_313, typeof __VLS_315> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_316 = __VLS_pickFunctionalComponentCtx(__VLS_313, __VLS_315)!;
                                let __VLS_317!: __VLS_NormalizeEmits<typeof __VLS_316.emit>;
                                {
                                    const __VLS_318 = __VLS_intrinsicElements["h2"];
                                    const __VLS_319 = __VLS_elementAsFunctionalComponent(__VLS_318);
                                    const __VLS_320 = __VLS_319({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_319));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_318, typeof __VLS_320> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_321 = __VLS_pickFunctionalComponentCtx(__VLS_318, __VLS_320)!;
                                    let __VLS_322!: __VLS_NormalizeEmits<typeof __VLS_321.emit>;
                                    (__VLS_321.slots!).default;
                                }
                                {
                                    const __VLS_323 = __VLS_intrinsicElements["h3"];
                                    const __VLS_324 = __VLS_elementAsFunctionalComponent(__VLS_323);
                                    const __VLS_325 = __VLS_324({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_324));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_323, typeof __VLS_325> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_326 = __VLS_pickFunctionalComponentCtx(__VLS_323, __VLS_325)!;
                                    let __VLS_327!: __VLS_NormalizeEmits<typeof __VLS_326.emit>;
                                    (__VLS_326.slots!).default;
                                }
                                {
                                    const __VLS_328 = __VLS_intrinsicElements["p"];
                                    const __VLS_329 = __VLS_elementAsFunctionalComponent(__VLS_328);
                                    const __VLS_330 = __VLS_329({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_329));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_328, typeof __VLS_330> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_331 = __VLS_pickFunctionalComponentCtx(__VLS_328, __VLS_330)!;
                                    let __VLS_332!: __VLS_NormalizeEmits<typeof __VLS_331.emit>;
                                    (__VLS_331.slots!).default;
                                }
                                {
                                    const __VLS_333 = __VLS_intrinsicElements["a"];
                                    const __VLS_334 = __VLS_elementAsFunctionalComponent(__VLS_333);
                                    const __VLS_335 = __VLS_334({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_334));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_333, typeof __VLS_335> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_336 = __VLS_pickFunctionalComponentCtx(__VLS_333, __VLS_335)!;
                                    let __VLS_337!: __VLS_NormalizeEmits<typeof __VLS_336.emit>;
                                    (__VLS_336.slots!).default;
                                }
                                (__VLS_316.slots!).default;
                            }
                            (__VLS_306.slots!).default;
                        }
                        (__VLS_231.slots!).default;
                    }
                    // @ts-ignore
                    [activeContent,];
                }
                else if (__VLS_ctx.activeContent === 'content2') {
                    {
                        const __VLS_338 = __VLS_intrinsicElements["div"];
                        const __VLS_339 = __VLS_elementAsFunctionalComponent(__VLS_338);
                        const __VLS_340 = __VLS_339({ ...{}, class: ("articles_all "), id: ("articles_know"), }, ...__VLS_functionalComponentArgsRest(__VLS_339));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_338, typeof __VLS_340> & Record<string, unknown>) => void)({ ...{}, class: ("articles_all "), id: ("articles_know"), });
                        const __VLS_341 = __VLS_pickFunctionalComponentCtx(__VLS_338, __VLS_340)!;
                        let __VLS_342!: __VLS_NormalizeEmits<typeof __VLS_341.emit>;
                        {
                            const __VLS_343 = __VLS_intrinsicElements["section"];
                            const __VLS_344 = __VLS_elementAsFunctionalComponent(__VLS_343);
                            const __VLS_345 = __VLS_344({ ...{}, class: ("section_all"), }, ...__VLS_functionalComponentArgsRest(__VLS_344));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_343, typeof __VLS_345> & Record<string, unknown>) => void)({ ...{}, class: ("section_all"), });
                            const __VLS_346 = __VLS_pickFunctionalComponentCtx(__VLS_343, __VLS_345)!;
                            let __VLS_347!: __VLS_NormalizeEmits<typeof __VLS_346.emit>;
                            {
                                const __VLS_348 = __VLS_intrinsicElements["img"];
                                const __VLS_349 = __VLS_elementAsFunctionalComponent(__VLS_348);
                                const __VLS_350 = __VLS_349({ ...{}, src: ("../img/articles/articles_6.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_349));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_348, typeof __VLS_350> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_6.jpg"), alt: (""), });
                                const __VLS_351 = __VLS_pickFunctionalComponentCtx(__VLS_348, __VLS_350)!;
                                let __VLS_352!: __VLS_NormalizeEmits<typeof __VLS_351.emit>;
                            }
                            {
                                const __VLS_353 = __VLS_intrinsicElements["article"];
                                const __VLS_354 = __VLS_elementAsFunctionalComponent(__VLS_353);
                                const __VLS_355 = __VLS_354({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_354));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_353, typeof __VLS_355> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_356 = __VLS_pickFunctionalComponentCtx(__VLS_353, __VLS_355)!;
                                let __VLS_357!: __VLS_NormalizeEmits<typeof __VLS_356.emit>;
                                {
                                    const __VLS_358 = __VLS_intrinsicElements["h2"];
                                    const __VLS_359 = __VLS_elementAsFunctionalComponent(__VLS_358);
                                    const __VLS_360 = __VLS_359({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_359));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_358, typeof __VLS_360> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_361 = __VLS_pickFunctionalComponentCtx(__VLS_358, __VLS_360)!;
                                    let __VLS_362!: __VLS_NormalizeEmits<typeof __VLS_361.emit>;
                                    (__VLS_361.slots!).default;
                                }
                                {
                                    const __VLS_363 = __VLS_intrinsicElements["h3"];
                                    const __VLS_364 = __VLS_elementAsFunctionalComponent(__VLS_363);
                                    const __VLS_365 = __VLS_364({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_364));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_363, typeof __VLS_365> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_366 = __VLS_pickFunctionalComponentCtx(__VLS_363, __VLS_365)!;
                                    let __VLS_367!: __VLS_NormalizeEmits<typeof __VLS_366.emit>;
                                    (__VLS_366.slots!).default;
                                }
                                {
                                    const __VLS_368 = __VLS_intrinsicElements["p"];
                                    const __VLS_369 = __VLS_elementAsFunctionalComponent(__VLS_368);
                                    const __VLS_370 = __VLS_369({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_369));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_368, typeof __VLS_370> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_371 = __VLS_pickFunctionalComponentCtx(__VLS_368, __VLS_370)!;
                                    let __VLS_372!: __VLS_NormalizeEmits<typeof __VLS_371.emit>;
                                    (__VLS_371.slots!).default;
                                }
                                {
                                    const __VLS_373 = __VLS_intrinsicElements["a"];
                                    const __VLS_374 = __VLS_elementAsFunctionalComponent(__VLS_373);
                                    const __VLS_375 = __VLS_374({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_374));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_373, typeof __VLS_375> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_376 = __VLS_pickFunctionalComponentCtx(__VLS_373, __VLS_375)!;
                                    let __VLS_377!: __VLS_NormalizeEmits<typeof __VLS_376.emit>;
                                    (__VLS_376.slots!).default;
                                }
                                (__VLS_356.slots!).default;
                            }
                            (__VLS_346.slots!).default;
                        }
                        {
                            const __VLS_378 = __VLS_intrinsicElements["section"];
                            const __VLS_379 = __VLS_elementAsFunctionalComponent(__VLS_378);
                            const __VLS_380 = __VLS_379({ ...{}, class: ("section_all even"), }, ...__VLS_functionalComponentArgsRest(__VLS_379));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_378, typeof __VLS_380> & Record<string, unknown>) => void)({ ...{}, class: ("section_all even"), });
                            const __VLS_381 = __VLS_pickFunctionalComponentCtx(__VLS_378, __VLS_380)!;
                            let __VLS_382!: __VLS_NormalizeEmits<typeof __VLS_381.emit>;
                            {
                                const __VLS_383 = __VLS_intrinsicElements["img"];
                                const __VLS_384 = __VLS_elementAsFunctionalComponent(__VLS_383);
                                const __VLS_385 = __VLS_384({ ...{}, src: ("../img/articles/articles_7.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_384));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_383, typeof __VLS_385> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_7.jpg"), alt: (""), });
                                const __VLS_386 = __VLS_pickFunctionalComponentCtx(__VLS_383, __VLS_385)!;
                                let __VLS_387!: __VLS_NormalizeEmits<typeof __VLS_386.emit>;
                            }
                            {
                                const __VLS_388 = __VLS_intrinsicElements["article"];
                                const __VLS_389 = __VLS_elementAsFunctionalComponent(__VLS_388);
                                const __VLS_390 = __VLS_389({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_389));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_388, typeof __VLS_390> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_391 = __VLS_pickFunctionalComponentCtx(__VLS_388, __VLS_390)!;
                                let __VLS_392!: __VLS_NormalizeEmits<typeof __VLS_391.emit>;
                                {
                                    const __VLS_393 = __VLS_intrinsicElements["h2"];
                                    const __VLS_394 = __VLS_elementAsFunctionalComponent(__VLS_393);
                                    const __VLS_395 = __VLS_394({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_394));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_393, typeof __VLS_395> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_396 = __VLS_pickFunctionalComponentCtx(__VLS_393, __VLS_395)!;
                                    let __VLS_397!: __VLS_NormalizeEmits<typeof __VLS_396.emit>;
                                    (__VLS_396.slots!).default;
                                }
                                {
                                    const __VLS_398 = __VLS_intrinsicElements["h3"];
                                    const __VLS_399 = __VLS_elementAsFunctionalComponent(__VLS_398);
                                    const __VLS_400 = __VLS_399({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_399));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_398, typeof __VLS_400> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_401 = __VLS_pickFunctionalComponentCtx(__VLS_398, __VLS_400)!;
                                    let __VLS_402!: __VLS_NormalizeEmits<typeof __VLS_401.emit>;
                                    (__VLS_401.slots!).default;
                                }
                                {
                                    const __VLS_403 = __VLS_intrinsicElements["p"];
                                    const __VLS_404 = __VLS_elementAsFunctionalComponent(__VLS_403);
                                    const __VLS_405 = __VLS_404({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_404));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_403, typeof __VLS_405> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_406 = __VLS_pickFunctionalComponentCtx(__VLS_403, __VLS_405)!;
                                    let __VLS_407!: __VLS_NormalizeEmits<typeof __VLS_406.emit>;
                                    (__VLS_406.slots!).default;
                                }
                                {
                                    const __VLS_408 = __VLS_intrinsicElements["a"];
                                    const __VLS_409 = __VLS_elementAsFunctionalComponent(__VLS_408);
                                    const __VLS_410 = __VLS_409({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_409));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_408, typeof __VLS_410> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_411 = __VLS_pickFunctionalComponentCtx(__VLS_408, __VLS_410)!;
                                    let __VLS_412!: __VLS_NormalizeEmits<typeof __VLS_411.emit>;
                                    (__VLS_411.slots!).default;
                                }
                                (__VLS_391.slots!).default;
                            }
                            (__VLS_381.slots!).default;
                        }
                        {
                            const __VLS_413 = __VLS_intrinsicElements["section"];
                            const __VLS_414 = __VLS_elementAsFunctionalComponent(__VLS_413);
                            const __VLS_415 = __VLS_414({ ...{}, class: ("section_all"), }, ...__VLS_functionalComponentArgsRest(__VLS_414));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_413, typeof __VLS_415> & Record<string, unknown>) => void)({ ...{}, class: ("section_all"), });
                            const __VLS_416 = __VLS_pickFunctionalComponentCtx(__VLS_413, __VLS_415)!;
                            let __VLS_417!: __VLS_NormalizeEmits<typeof __VLS_416.emit>;
                            {
                                const __VLS_418 = __VLS_intrinsicElements["img"];
                                const __VLS_419 = __VLS_elementAsFunctionalComponent(__VLS_418);
                                const __VLS_420 = __VLS_419({ ...{}, src: ("../img/articles/articles_8.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_419));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_418, typeof __VLS_420> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_8.jpg"), alt: (""), });
                                const __VLS_421 = __VLS_pickFunctionalComponentCtx(__VLS_418, __VLS_420)!;
                                let __VLS_422!: __VLS_NormalizeEmits<typeof __VLS_421.emit>;
                            }
                            {
                                const __VLS_423 = __VLS_intrinsicElements["article"];
                                const __VLS_424 = __VLS_elementAsFunctionalComponent(__VLS_423);
                                const __VLS_425 = __VLS_424({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_424));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_423, typeof __VLS_425> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_426 = __VLS_pickFunctionalComponentCtx(__VLS_423, __VLS_425)!;
                                let __VLS_427!: __VLS_NormalizeEmits<typeof __VLS_426.emit>;
                                {
                                    const __VLS_428 = __VLS_intrinsicElements["h2"];
                                    const __VLS_429 = __VLS_elementAsFunctionalComponent(__VLS_428);
                                    const __VLS_430 = __VLS_429({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_429));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_428, typeof __VLS_430> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_431 = __VLS_pickFunctionalComponentCtx(__VLS_428, __VLS_430)!;
                                    let __VLS_432!: __VLS_NormalizeEmits<typeof __VLS_431.emit>;
                                    (__VLS_431.slots!).default;
                                }
                                {
                                    const __VLS_433 = __VLS_intrinsicElements["h3"];
                                    const __VLS_434 = __VLS_elementAsFunctionalComponent(__VLS_433);
                                    const __VLS_435 = __VLS_434({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_434));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_433, typeof __VLS_435> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_436 = __VLS_pickFunctionalComponentCtx(__VLS_433, __VLS_435)!;
                                    let __VLS_437!: __VLS_NormalizeEmits<typeof __VLS_436.emit>;
                                    (__VLS_436.slots!).default;
                                }
                                {
                                    const __VLS_438 = __VLS_intrinsicElements["p"];
                                    const __VLS_439 = __VLS_elementAsFunctionalComponent(__VLS_438);
                                    const __VLS_440 = __VLS_439({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_439));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_438, typeof __VLS_440> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_441 = __VLS_pickFunctionalComponentCtx(__VLS_438, __VLS_440)!;
                                    let __VLS_442!: __VLS_NormalizeEmits<typeof __VLS_441.emit>;
                                    (__VLS_441.slots!).default;
                                }
                                {
                                    const __VLS_443 = __VLS_intrinsicElements["a"];
                                    const __VLS_444 = __VLS_elementAsFunctionalComponent(__VLS_443);
                                    const __VLS_445 = __VLS_444({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_444));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_443, typeof __VLS_445> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_446 = __VLS_pickFunctionalComponentCtx(__VLS_443, __VLS_445)!;
                                    let __VLS_447!: __VLS_NormalizeEmits<typeof __VLS_446.emit>;
                                    (__VLS_446.slots!).default;
                                }
                                (__VLS_426.slots!).default;
                            }
                            (__VLS_416.slots!).default;
                        }
                        (__VLS_341.slots!).default;
                    }
                    // @ts-ignore
                    [activeContent,];
                }
                else if (__VLS_ctx.activeContent === 'content3') {
                    {
                        const __VLS_448 = __VLS_intrinsicElements["div"];
                        const __VLS_449 = __VLS_elementAsFunctionalComponent(__VLS_448);
                        const __VLS_450 = __VLS_449({ ...{}, class: ("articles_all"), id: ("articles_interview"), }, ...__VLS_functionalComponentArgsRest(__VLS_449));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_448, typeof __VLS_450> & Record<string, unknown>) => void)({ ...{}, class: ("articles_all"), id: ("articles_interview"), });
                        const __VLS_451 = __VLS_pickFunctionalComponentCtx(__VLS_448, __VLS_450)!;
                        let __VLS_452!: __VLS_NormalizeEmits<typeof __VLS_451.emit>;
                        {
                            const __VLS_453 = __VLS_intrinsicElements["section"];
                            const __VLS_454 = __VLS_elementAsFunctionalComponent(__VLS_453);
                            const __VLS_455 = __VLS_454({ ...{}, class: ("section_all"), }, ...__VLS_functionalComponentArgsRest(__VLS_454));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_453, typeof __VLS_455> & Record<string, unknown>) => void)({ ...{}, class: ("section_all"), });
                            const __VLS_456 = __VLS_pickFunctionalComponentCtx(__VLS_453, __VLS_455)!;
                            let __VLS_457!: __VLS_NormalizeEmits<typeof __VLS_456.emit>;
                            {
                                const __VLS_458 = __VLS_intrinsicElements["img"];
                                const __VLS_459 = __VLS_elementAsFunctionalComponent(__VLS_458);
                                const __VLS_460 = __VLS_459({ ...{}, src: ("../img/articles/articles_10.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_459));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_458, typeof __VLS_460> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_10.jpg"), alt: (""), });
                                const __VLS_461 = __VLS_pickFunctionalComponentCtx(__VLS_458, __VLS_460)!;
                                let __VLS_462!: __VLS_NormalizeEmits<typeof __VLS_461.emit>;
                            }
                            {
                                const __VLS_463 = __VLS_intrinsicElements["article"];
                                const __VLS_464 = __VLS_elementAsFunctionalComponent(__VLS_463);
                                const __VLS_465 = __VLS_464({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_464));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_463, typeof __VLS_465> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_466 = __VLS_pickFunctionalComponentCtx(__VLS_463, __VLS_465)!;
                                let __VLS_467!: __VLS_NormalizeEmits<typeof __VLS_466.emit>;
                                {
                                    const __VLS_468 = __VLS_intrinsicElements["h2"];
                                    const __VLS_469 = __VLS_elementAsFunctionalComponent(__VLS_468);
                                    const __VLS_470 = __VLS_469({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_469));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_468, typeof __VLS_470> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_471 = __VLS_pickFunctionalComponentCtx(__VLS_468, __VLS_470)!;
                                    let __VLS_472!: __VLS_NormalizeEmits<typeof __VLS_471.emit>;
                                    (__VLS_471.slots!).default;
                                }
                                {
                                    const __VLS_473 = __VLS_intrinsicElements["h3"];
                                    const __VLS_474 = __VLS_elementAsFunctionalComponent(__VLS_473);
                                    const __VLS_475 = __VLS_474({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_474));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_473, typeof __VLS_475> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_476 = __VLS_pickFunctionalComponentCtx(__VLS_473, __VLS_475)!;
                                    let __VLS_477!: __VLS_NormalizeEmits<typeof __VLS_476.emit>;
                                    (__VLS_476.slots!).default;
                                }
                                {
                                    const __VLS_478 = __VLS_intrinsicElements["p"];
                                    const __VLS_479 = __VLS_elementAsFunctionalComponent(__VLS_478);
                                    const __VLS_480 = __VLS_479({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_479));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_478, typeof __VLS_480> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_481 = __VLS_pickFunctionalComponentCtx(__VLS_478, __VLS_480)!;
                                    let __VLS_482!: __VLS_NormalizeEmits<typeof __VLS_481.emit>;
                                    (__VLS_481.slots!).default;
                                }
                                {
                                    const __VLS_483 = __VLS_intrinsicElements["a"];
                                    const __VLS_484 = __VLS_elementAsFunctionalComponent(__VLS_483);
                                    const __VLS_485 = __VLS_484({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_484));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_483, typeof __VLS_485> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_486 = __VLS_pickFunctionalComponentCtx(__VLS_483, __VLS_485)!;
                                    let __VLS_487!: __VLS_NormalizeEmits<typeof __VLS_486.emit>;
                                    (__VLS_486.slots!).default;
                                }
                                (__VLS_466.slots!).default;
                            }
                            (__VLS_456.slots!).default;
                        }
                        {
                            const __VLS_488 = __VLS_intrinsicElements["section"];
                            const __VLS_489 = __VLS_elementAsFunctionalComponent(__VLS_488);
                            const __VLS_490 = __VLS_489({ ...{}, class: ("section_all even"), }, ...__VLS_functionalComponentArgsRest(__VLS_489));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_488, typeof __VLS_490> & Record<string, unknown>) => void)({ ...{}, class: ("section_all even"), });
                            const __VLS_491 = __VLS_pickFunctionalComponentCtx(__VLS_488, __VLS_490)!;
                            let __VLS_492!: __VLS_NormalizeEmits<typeof __VLS_491.emit>;
                            {
                                const __VLS_493 = __VLS_intrinsicElements["img"];
                                const __VLS_494 = __VLS_elementAsFunctionalComponent(__VLS_493);
                                const __VLS_495 = __VLS_494({ ...{}, src: ("../img/articles/articles_11.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_494));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_493, typeof __VLS_495> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_11.jpg"), alt: (""), });
                                const __VLS_496 = __VLS_pickFunctionalComponentCtx(__VLS_493, __VLS_495)!;
                                let __VLS_497!: __VLS_NormalizeEmits<typeof __VLS_496.emit>;
                            }
                            {
                                const __VLS_498 = __VLS_intrinsicElements["article"];
                                const __VLS_499 = __VLS_elementAsFunctionalComponent(__VLS_498);
                                const __VLS_500 = __VLS_499({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_499));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_498, typeof __VLS_500> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_501 = __VLS_pickFunctionalComponentCtx(__VLS_498, __VLS_500)!;
                                let __VLS_502!: __VLS_NormalizeEmits<typeof __VLS_501.emit>;
                                {
                                    const __VLS_503 = __VLS_intrinsicElements["h2"];
                                    const __VLS_504 = __VLS_elementAsFunctionalComponent(__VLS_503);
                                    const __VLS_505 = __VLS_504({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_504));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_503, typeof __VLS_505> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_506 = __VLS_pickFunctionalComponentCtx(__VLS_503, __VLS_505)!;
                                    let __VLS_507!: __VLS_NormalizeEmits<typeof __VLS_506.emit>;
                                    (__VLS_506.slots!).default;
                                }
                                {
                                    const __VLS_508 = __VLS_intrinsicElements["h3"];
                                    const __VLS_509 = __VLS_elementAsFunctionalComponent(__VLS_508);
                                    const __VLS_510 = __VLS_509({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_509));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_508, typeof __VLS_510> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_511 = __VLS_pickFunctionalComponentCtx(__VLS_508, __VLS_510)!;
                                    let __VLS_512!: __VLS_NormalizeEmits<typeof __VLS_511.emit>;
                                    (__VLS_511.slots!).default;
                                }
                                {
                                    const __VLS_513 = __VLS_intrinsicElements["p"];
                                    const __VLS_514 = __VLS_elementAsFunctionalComponent(__VLS_513);
                                    const __VLS_515 = __VLS_514({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_514));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_513, typeof __VLS_515> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_516 = __VLS_pickFunctionalComponentCtx(__VLS_513, __VLS_515)!;
                                    let __VLS_517!: __VLS_NormalizeEmits<typeof __VLS_516.emit>;
                                    (__VLS_516.slots!).default;
                                }
                                {
                                    const __VLS_518 = __VLS_intrinsicElements["a"];
                                    const __VLS_519 = __VLS_elementAsFunctionalComponent(__VLS_518);
                                    const __VLS_520 = __VLS_519({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_519));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_518, typeof __VLS_520> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_521 = __VLS_pickFunctionalComponentCtx(__VLS_518, __VLS_520)!;
                                    let __VLS_522!: __VLS_NormalizeEmits<typeof __VLS_521.emit>;
                                    (__VLS_521.slots!).default;
                                }
                                (__VLS_501.slots!).default;
                            }
                            (__VLS_491.slots!).default;
                        }
                        {
                            const __VLS_523 = __VLS_intrinsicElements["section"];
                            const __VLS_524 = __VLS_elementAsFunctionalComponent(__VLS_523);
                            const __VLS_525 = __VLS_524({ ...{}, class: ("section_all"), }, ...__VLS_functionalComponentArgsRest(__VLS_524));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_523, typeof __VLS_525> & Record<string, unknown>) => void)({ ...{}, class: ("section_all"), });
                            const __VLS_526 = __VLS_pickFunctionalComponentCtx(__VLS_523, __VLS_525)!;
                            let __VLS_527!: __VLS_NormalizeEmits<typeof __VLS_526.emit>;
                            {
                                const __VLS_528 = __VLS_intrinsicElements["img"];
                                const __VLS_529 = __VLS_elementAsFunctionalComponent(__VLS_528);
                                const __VLS_530 = __VLS_529({ ...{}, src: ("../img/articles/articles_12.jpg"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_529));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_528, typeof __VLS_530> & Record<string, unknown>) => void)({ ...{}, src: ("../img/articles/articles_12.jpg"), alt: (""), });
                                const __VLS_531 = __VLS_pickFunctionalComponentCtx(__VLS_528, __VLS_530)!;
                                let __VLS_532!: __VLS_NormalizeEmits<typeof __VLS_531.emit>;
                            }
                            {
                                const __VLS_533 = __VLS_intrinsicElements["article"];
                                const __VLS_534 = __VLS_elementAsFunctionalComponent(__VLS_533);
                                const __VLS_535 = __VLS_534({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_534));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_533, typeof __VLS_535> & Record<string, unknown>) => void)({ ...{}, });
                                const __VLS_536 = __VLS_pickFunctionalComponentCtx(__VLS_533, __VLS_535)!;
                                let __VLS_537!: __VLS_NormalizeEmits<typeof __VLS_536.emit>;
                                {
                                    const __VLS_538 = __VLS_intrinsicElements["h2"];
                                    const __VLS_539 = __VLS_elementAsFunctionalComponent(__VLS_538);
                                    const __VLS_540 = __VLS_539({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_539));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_538, typeof __VLS_540> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_541 = __VLS_pickFunctionalComponentCtx(__VLS_538, __VLS_540)!;
                                    let __VLS_542!: __VLS_NormalizeEmits<typeof __VLS_541.emit>;
                                    (__VLS_541.slots!).default;
                                }
                                {
                                    const __VLS_543 = __VLS_intrinsicElements["h3"];
                                    const __VLS_544 = __VLS_elementAsFunctionalComponent(__VLS_543);
                                    const __VLS_545 = __VLS_544({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_544));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_543, typeof __VLS_545> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_546 = __VLS_pickFunctionalComponentCtx(__VLS_543, __VLS_545)!;
                                    let __VLS_547!: __VLS_NormalizeEmits<typeof __VLS_546.emit>;
                                    (__VLS_546.slots!).default;
                                }
                                {
                                    const __VLS_548 = __VLS_intrinsicElements["p"];
                                    const __VLS_549 = __VLS_elementAsFunctionalComponent(__VLS_548);
                                    const __VLS_550 = __VLS_549({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_549));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_548, typeof __VLS_550> & Record<string, unknown>) => void)({ ...{}, });
                                    const __VLS_551 = __VLS_pickFunctionalComponentCtx(__VLS_548, __VLS_550)!;
                                    let __VLS_552!: __VLS_NormalizeEmits<typeof __VLS_551.emit>;
                                    (__VLS_551.slots!).default;
                                }
                                {
                                    const __VLS_553 = __VLS_intrinsicElements["a"];
                                    const __VLS_554 = __VLS_elementAsFunctionalComponent(__VLS_553);
                                    const __VLS_555 = __VLS_554({ ...{}, href: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_554));
                                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_553, typeof __VLS_555> & Record<string, unknown>) => void)({ ...{}, href: (""), });
                                    const __VLS_556 = __VLS_pickFunctionalComponentCtx(__VLS_553, __VLS_555)!;
                                    let __VLS_557!: __VLS_NormalizeEmits<typeof __VLS_556.emit>;
                                    (__VLS_556.slots!).default;
                                }
                                (__VLS_536.slots!).default;
                            }
                            (__VLS_526.slots!).default;
                        }
                        (__VLS_451.slots!).default;
                    }
                    // @ts-ignore
                    [activeContent,];
                }
                (__VLS_168.slots!).default;
            }
            (__VLS_13.slots!).default;
        }
        {
            const __VLS_558 = ({} as 'DefaultFooter' extends keyof typeof __VLS_ctx ? { 'DefaultFooter': typeof __VLS_ctx.DefaultFooter; } : typeof __VLS_resolvedLocalAndGlobalComponents).DefaultFooter;
            const __VLS_559 = __VLS_asFunctionalComponent(__VLS_558, new __VLS_558({ ...{}, }));
            ({} as { DefaultFooter: typeof __VLS_558; }).DefaultFooter;
            const __VLS_560 = __VLS_559({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_559));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_558, typeof __VLS_560> & Record<string, unknown>) => void)({ ...{}, });
            const __VLS_561 = __VLS_pickFunctionalComponentCtx(__VLS_558, __VLS_560)!;
            let __VLS_562!: __VLS_NormalizeEmits<typeof __VLS_561.emit>;
        }
        (__VLS_3.slots!).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots!: {};
    return __VLS_slots;
}
