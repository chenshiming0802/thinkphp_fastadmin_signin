define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'csmsignin/weixinuser/index' + location.search,
                    add_url: 'csmsignin/weixinuser/add',
                    edit_url: 'csmsignin/weixinuser/edit',
                    del_url: 'csmsignin/weixinuser/del',
                    multi_url: 'csmsignin/weixinuser/multi',
                    table: 'csmsignin_weixinuser',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'wxappid', title: __('Wxappid')},
                        // {field: 'currentsessionkey', title: __('Currentsessionkey')},
                        {field: 'openid', title: __('Openid')},
                        {field: 'avatarUrl', title: __('Avatarurl'), formatter: Table.api.formatter.url},
                        {field: 'city', title: __('City')},
                        {field: 'country', title: __('Country')},
                        {field: 'gender', title: __('Gender')},
                        {field: 'language', title: __('Language')},
                        {field: 'nickName', title: __('Nickname')},
                        {field: 'province', title: __('Province')},
                        //{field: 'phoneNumber', title: __('Phonenumber')},
                        {field: 'purePhoneNumber', title: __('Purephonenumber')},
                        {field: 'countryCode', title: __('Countrycode')},
                        // {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
                        // {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'b1', title: __('B1')},
                        // {field: 'b2', title: __('B2')},
                        // {field: 'b3', title: __('B3')},
                        // {field: 'b4', title: __('B4')},
                        // {field: 'b5', title: __('B5')},
                        // {field: 'b6', title: __('B6')},
                        // {field: 'b7', title: __('B7')},
                        // {field: 'b8', title: __('B8')},
                        // {field: 'b9', title: __('B9')},
                        // {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});