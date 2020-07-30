$(function(){
    //总计
    function pricesum(){
        //数量
        let sum = 0;
        $(".itxt").each(function(index, item) {
            sum += parseInt($(item).prop("value")) || 0;
        });
        $(".amount-sum").children("em").html(sum);
        //总价
        let sump = 0;
        $(".p-sum").each(function(index, item) {
            let strp=$(item).html();
            sump += parseFloat(strp.replace("￥","")) || 0;
        });
        sump=sump.toFixed(2);
        $(".price-sum").children("em").html("￥"+sump);
    }
    pricesum();
    //全选
    let flag=true;   
    $(".checkall").click(function(){
        if(flag){
            // $("input").prop("checked",true);
            $(".checkall").prop("checked",true);
            $(".j-checkbox").prop("checked",true);
            flag=false;
        }else{
            // $("input").prop("checked",false);
            $(".checkall").prop("checked",false);
            $(".j-checkbox").prop("checked",false);
            flag=true;
        }
        if($(".j-checkbox").prop("checked")){
            $(".j-checkbox").parent("div").parent("div").addClass("check-cart-item");
        }else{
            $(".j-checkbox").parent("div").parent("div").removeClass("check-cart-item");
        }
    })
    $(".j-checkbox").click(function(){
        if(flag==false){
            $(".checkall").prop("checked",false);
            flag=true;
        }
        if($(".j-checkbox").eq(0).prop("checked")==true&&$(".j-checkbox").eq(1).prop("checked")==true&&$(".j-checkbox").eq(2).prop("checked")==true){
            $(".checkall").prop("checked",true);
            flag=false;
        }
        if($(this).prop("checked")){
            $(this).parent("div").parent("div").addClass("check-cart-item");
        }else{
            $(this).parent("div").parent("div").removeClass("check-cart-item");
        }
    })
    //删除
    $(".p-action").click(function(){
        $(this).parent("div").remove();
        pricesum();
    })
    $(".remove-batch").click(function(){
        $(".check-cart-item").remove();
        pricesum();
    })
    $(".clear-all").click(function(){
        $(".cart-item").remove();
        pricesum();
    })
    //加减商品
    //加法
    $(".increment").click(function(){
        $(this).parent("div").children("input").prop("value",$(this).parent("div").children("input").prop("value")*1+1);
        //小计
        let str=$(this).parent("div").parent("div").prev().html();
        str=parseFloat(str.replace("￥",""));
        str=str.toFixed(2);
        $(this).parent("div").parent("div").next().html("￥"+($(this).parent("div").children("input").prop("value")*str).toFixed(2));
        pricesum();
    })
      //减法
    $(".decrement").click(function(){
        if($(this).parent("div").children("input").prop("value")>1){
            $(this).parent("div").children("input").prop("value",$(this).parent("div").children("input").prop("value")*1-1);
            //小计
            let str=$(this).parent("div").parent("div").prev().html();
            str=parseFloat(str.replace("￥",""));
            str=str.toFixed(2);
            $(this).parent("div").parent("div").next().html("￥"+($(this).parent("div").children("input").prop("value")*str).toFixed(2));
            pricesum();
        }
    })   
})