define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'csmsignin/confinfo/index' + location.search,
                    add_url: 'csmsignin/confinfo/add',
                    edit_url: 'csmsignin/confinfo/edit',
                    del_url: 'csmsignin/confinfo/del',
                    multi_url: 'csmsignin/confinfo/multi',
                    table: 'csmsignin_confinfo',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'weigh',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        //{field: 'csmsignin_conf_id', title: __('Csmsignin_conf_id')},
                        {field: 'title', title: __('Title')},
                        {field: 'weigh', title: __('Weigh')},
                        //{field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'isneedsigined', title: __('Isneedsigined'), searchList: {"Y":__('Isneedsigined y'),"N":__('Isneedsigined n')}, formatter: Table.api.formatter.normal},
                        // {field: 'admin_id', title: __('Admin_id')},
                        {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
                        // {field: 'b1', title: __('B1')},
                        // {field: 'b2', title: __('B2')},
                        // {field: 'b3', title: __('B3')},
                        // {field: 'b4', title: __('B4')},
                        // {field: 'b5', title: __('B5')},
                        // {field: 'b6', title: __('B6')},
                        // {field: 'b7', title: __('B7')},
                        // {field: 'b8', title: __('B8')},
                        // {field: 'b9', title: __('B9')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            $("#c-csmsignin_conf_id").val($("#indexpageparentid", window.top.document).val());
            $("#addpageparentname").text($("#indexpageparentname", window.top.document).val());
            Controller.api.bindevent();
        },
        edit: function () {
            $("#editpageparentname").text($("#indexpageparentname", window.top.document).val());
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