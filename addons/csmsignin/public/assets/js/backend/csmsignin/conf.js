define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'csmsignin/conf/index' + location.search,
                    add_url: 'csmsignin/conf/add',
                    edit_url: 'csmsignin/conf/edit',
                    del_url: 'csmsignin/conf/del',
                    multi_url: 'csmsignin/conf/multi',
                    table: 'csmsignin_conf',
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
                        { checkbox: true },
                        { field: 'id', title: __('Id') },
                        { field: 'name', title: __('Name') },
                        { field: 'images', title: __('Images'), events: Table.api.events.image, formatter: Table.api.formatter.images },
                        { field: 'requiredsiginin', title: __('Requiredsiginin'), searchList: { "Y": __('Requiredsiginin y'), "N": __('Requiredsiginin n') }, formatter: Table.api.formatter.normal },
                        { field: 'canoutusersignin', title: __('Canoutusersignin'), searchList: {"Y":__('Canoutusersignin y'),"N":__('Canoutusersignin n')}, formatter: Table.api.formatter.normal},
                        // { field: 'siginedcontent', title: __('Siginedcontent') },
                        // { field: 'meetdate', title: __('Meetdate') },
                        //{ field: 'meetaddress', title: __('Meetaddress') },
                        { field: 'begintime', title: __('Begintime'), operate: 'RANGE', addclass: 'datetimerange', formatter: Table.api.formatter.datetime },
                        { field: 'endtime', title: __('Endtime'), operate: 'RANGE', addclass: 'datetimerange', formatter: Table.api.formatter.datetime },
                        { field: 'status', title: __('Status'), searchList: { "normal": __('Normal'), "hidden": __('Hidden') }, formatter: Table.api.formatter.status },
                        // {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'admin_id', title: __('Admin_id')},
                        // {field: 'b1', title: __('B1')},
                        // {field: 'b2', title: __('B2')},
                        // {field: 'b3', title: __('B3')},
                        // {field: 'b4', title: __('B4')},
                        // {field: 'b5', title: __('B5')},
                        // {field: 'b6', title: __('B6')},
                        // {field: 'b7', title: __('B7')},
                        // {field: 'b8', title: __('B8')},
                        // {field: 'b9', title: __('B9')},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table, events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                            //formatter: Table.api.formatter.buttons,
                            buttons: [
                                {
                                    name: 'confinfos',
                                    text: __('栏目维护'),
                                    classname: 'btn btn-xs btn-success btn-click',
                                    icon: 'fa fa-file',
                                    click: function (res, row) {
                                        window.open("../csmsignin/confinfo?parentid=" + row.id);
                                    },
                                },
                                {
                                    name: 'confusers',
                                    text: __('参会人维护'),
                                    classname: 'btn btn-xs btn-info btn-click',
                                    icon: 'fa fa-file',
                                    click: function (res, row) {
                                        window.open("../csmsignin/confuser?parentid=" + row.id);
                                    },
                                },
                                {
                                    name: 'confqdcode',
                                    text: __('小程序二维码'),
                                    classname: 'btn btn-xs btn-info btn-click',
                                    icon: 'fa fa-file',
                                    click: function (res, row) {
                                        window.open("../csmsignin/conf/getQDcodeImg?confid=" + row.id);
                                    },
                                }                               
                            ]
                        }
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