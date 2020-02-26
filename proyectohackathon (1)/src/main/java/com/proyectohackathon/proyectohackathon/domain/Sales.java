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
    @Field
    private String id;
    @NotNull
    @NotBlank
    private String region;
    private String country;
    private String item_type;
    private String sales_channel;
    private String order_priority;
    private String order_date;
    private String order_id;
    private String ship_date;
    private String units_sold;
    private String unit_price;
    private String unit_cost;
    private String total_revenue;
    private String total_cost;
    private String total_profit;

}
