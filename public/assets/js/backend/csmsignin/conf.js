define(['jquery', 'bootstrap', 'backend', 'table', 'form','csmsignin_xcore'], function ($, undefined, Backend, Table, Form,xcore) {

    var Controller = {
        _queryString: '',
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'csmsignin/conf/index' + Controller._queryString,
                    add_url: 'csmsignin/conf/add' + Controller._queryString,
                    edit_url: 'csmsignin/conf/edit',
                    del_url: 'csmsignin/conf/del',
                    multi_url: 'csmsignin/conf/multi',
                    import_url: 'csmsignin/conf/import',
                    table: 'csmsignin_conf',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {field: 'images', title: __('Images'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.images},
                        {field: 'requiredsiginin', title: __('Requiredsiginin'), searchList: {"Y":__('Requiredsiginin y'),"N":__('Requiredsiginin n')}, formatter: Table.api.formatter.normal},
                        {field: 'canoutusersignin', title: __('Canoutusersignin'), searchList: {"Y":__('Canoutusersignin y'),"N":__('Canoutusersignin n')}, formatter: Table.api.formatter.normal},
                        {field: 'begintime', title: __('Begintime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'endtime', title: __('Endtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            Controller.api.rebuildAddUrl(table);
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
            },
            queryString: function () {
                return location.search.replace("dialog=1", "").split('&').filter(function (item) {
                    return !!item;
                }).join("&");
            },
            rebuildAddUrl: function (table) {
                var $tabs = $('.nav-tabs[data-field]');
                if ($tabs.length > 0) {
                    var field = $tabs.data("field");
                    var options = table.bootstrapTable('getOptions');
                    table.on("pre-body.bs.table", function () {
                        var activeTab = $('.active a', $tabs);
                        var value = activeTab.data("value");
                        var reg = new RegExp(field + "\=(.*?)");
                        var queryString = location.search
                            .replace("dialog=1", "")
                            .replace(reg, "")
                            .split('&')
                            .filter(function (item) {
                                return !!item;
                            }).join("&");
                        if (queryString.indexOf("?") == 0) {
                            queryString = queryString + "&" + field + "=" + value
                        } else {
                            queryString = queryString + "?" + field + "=" + value
                        }
                        options.extend.add_url = 'csmsignin/conf/add' + queryString
                    })
                }
            }
        },
        port: function(){
            let that = this;
            $("#xp-block-mp-"+Config.csmsignin.cloginwxmp).removeClass("hidden");
        }
    };
    Controller._queryString = Controller.api.queryString();
    return Controller;
});