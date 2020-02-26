package com.proyectohackathon.proyectohackathon.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "sales")
public class Sales {
    @Id
    private String id;
    @NotNull
    @NotBlank

    @Field("Region")
    private String region;

    @Field("Country")
    private String country;

    @Field("Item Type")
    private String item_type;

    @Field("Sales Channel")
    private String sales_channel;

    @Field("Order Priority")
    private String order_priority;

    @Field("Order Date")
    private String order_date;

    @Field("Order ID")
    private String order_id;

    @Field("Ship Date")
    private String ship_date;

    @Field("Units Sold")
    private String units_sold;

    @Field("Unit Price")
    private String unit_price;

    @Field("Unit Cost")
    private String unit_cost;

    @Field("Total Revenue")
    private String total_revenue;

    @Field("Total Cost")
    private String total_cost;

    @Field("Total Profit")
    private String total_profit;

}
